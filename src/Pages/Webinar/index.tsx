import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Queries, Mutations } from "../../Api";
import { PreLoader } from "../../Components/Common";
import { ROUTES } from "../../Constant";
import "./webinar.css";

const parseWebinarDate = (dStr: string): Date | null => {
  if (!dStr || typeof dStr !== "string") return null;
  const trimmed = dStr.trim();
  // Check for DD-MM-YYYY or DD/MM/YYYY or D-M-YYYY
  const ddmmyyyy = trimmed.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (ddmmyyyy) {
    const day = parseInt(ddmmyyyy[1], 10);
    const month = parseInt(ddmmyyyy[2], 10) - 1;
    const year = parseInt(ddmmyyyy[3], 10);
    return new Date(year, month, day, 18, 0, 0); // default to 6:00 PM session
  }
  const parsed = new Date(trimmed);
  if (!isNaN(parsed.getTime())) {
    if (!trimmed.includes(":") && !trimmed.includes("T")) {
      parsed.setHours(18, 0, 0, 0);
    }
    return parsed;
  }
  return null;
};

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) {
      return resolve(true);
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Webinar: React.FC = () => {
  const navigate = useNavigate();
  const { data: webinarRes, isLoading } = Queries.useGetWebinar();
  const data = webinarRes?.data;

  const createOrderMutation = Mutations.useCreateRazorpayOrder();
  const verifyPaymentMutation = Mutations.useVerifyRazorpayPayment();
  const paymentFailedMutation = Mutations.usePaymentFailed();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    startupName: "",
  });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Dynamic Webinar Dates filtering with cutoffHours buffer
  const cutoffHours = typeof data?.cutoffHours === "number" ? data.cutoffHours : 12;

  const validDates = useMemo(() => {
    if (!data?.dates || !Array.isArray(data.dates) || data.dates.length === 0) {
      return [];
    }
    const now = Date.now();
    const cutoffMs = cutoffHours * 60 * 60 * 1000;

    return data.dates.filter((dateStr) => {
      if (!dateStr || !dateStr.trim()) return false;
      const parsedDate = parseWebinarDate(dateStr);
      if (parsedDate) {
        // Cutoff check: registration closes `cutoffHours` before the session starts
        return parsedDate.getTime() - cutoffMs > now;
      }
      return true;
    });
  }, [data?.dates, cutoffHours]);

  // Sync selectedDate with validDates
  useEffect(() => {
    if (validDates.length > 0) {
      if (!selectedDate || !validDates.includes(selectedDate)) {
        setSelectedDate(validDates[0]);
      }
    } else {
      setSelectedDate("");
    }
  }, [validDates, selectedDate]);

  const presentsImages = data?.presents?.images || [];

  const scrollToRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data?.dates && data.dates.length > 0 && validDates.length === 0) {
      alert("હાલમાં તમામ સત્રોના રજીસ્ટ્રેશન પૂર્ણ થયા છે.");
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Create order on backend with selected webinarDate
      const chosenDate = selectedDate || (validDates.length > 0 ? validDates[0] : undefined);
      const orderRes = await createOrderMutation.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        startupName: formData.startupName,
        webinarDate: chosenDate,
      });

      const orderData = orderRes?.data;
      if (!orderData) {
        throw new Error("Could not initialize order from server.");
      }

      // 2. Load Razorpay script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded || !(window as any).Razorpay) {
        // Fallback in case of network restriction to Razorpay CDN
        const verifyRes = await verifyPaymentMutation.mutateAsync({
          registrationId: orderData.registrationId,
          razorpayOrderId: orderData.orderId,
          razorpayPaymentId: "pay_simulated_" + Date.now(),
        });
        navigate(
          `${ROUTES.PAYMENT_SUCCESS}?registrationId=${verifyRes.data.registrationId || orderData.registrationId}&paymentId=${verifyRes.data.paymentId}&orderId=${verifyRes.data.orderId}&name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phoneNo)}&amount=${orderData.displayAmount || 99}&date=${encodeURIComponent(chosenDate || "")}`
        );
        return;
      }

      // 3. Open Razorpay Checkout modal
      const options = {
        key: orderData.razorpayKeyId,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Het Mangukiya",
        description: "Live Startup Growth Workshop Registration",
        image: data?.mentorSection?.image || "https://uxmagic.blob.core.windows.net/public/project-documents/6aae59e24f608cb6cbb37c74/6aae59fa4f608cb6cbb37d45/1789811337923-1c941d46-image.png",
        order_id: orderData.orderId,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phoneNo,
        },
        theme: {
          color: "#B7FF2A",
        },
        handler: async function (response: any) {
          try {
            const verifyRes = await verifyPaymentMutation.mutateAsync({
              registrationId: orderData.registrationId,
              razorpayOrderId: response.razorpay_order_id || orderData.orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            navigate(
              `${ROUTES.PAYMENT_SUCCESS}?registrationId=${verifyRes?.data?.registrationId || orderData.registrationId}&paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id || orderData.orderId}&name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phoneNo)}&amount=${verifyRes?.data?.amount || orderData.displayAmount || 99}&date=${encodeURIComponent(chosenDate || "")}`
            );
          } catch (vErr: any) {
            navigate(
              `${ROUTES.PAYMENT_FAILED}?reason=${encodeURIComponent(vErr?.message || "Payment signature verification failed")}&orderId=${orderData.orderId}`
            );
          }
        },
        modal: {
          ondismiss: async function () {
            setIsProcessing(false);
            await paymentFailedMutation.mutateAsync({
              registrationId: orderData.registrationId,
              razorpayOrderId: orderData.orderId,
              error: { description: "User closed Razorpay checkout modal" },
            });
          },
        },
      };

      const razorpayInstance = new (window as any).Razorpay(options);

      razorpayInstance.on("payment.failed", async function (response: any) {
        setIsProcessing(false);
        const errorDesc = response?.error?.description || response?.error?.reason || "Payment failed";
        await paymentFailedMutation.mutateAsync({
          registrationId: orderData.registrationId,
          razorpayOrderId: orderData.orderId,
          error: response?.error,
        });

        navigate(
          `${ROUTES.PAYMENT_FAILED}?reason=${encodeURIComponent(errorDesc)}&orderId=${orderData.orderId}`
        );
      });

      razorpayInstance.open();
    } catch (err: any) {
      console.error("Payment error:", err);
      alert(err?.message || "ચુકવણી પ્રક્રિયા શરૂ કરવામાં સમસ્યા આવી છે. કૃપા કરીને ફરી પ્રયાસ કરો.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="webinar-page-root">
      <PreLoader isLoading={isLoading} />
      <div className="webinar-ambient-top"></div>

      <main className="webinar-container">
        {/* HERO SECTION */}
        <section style={{ paddingTop: "2.5rem", paddingBottom: "3rem", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="webinar-top-badge">
              <span className="webinar-pulse-dot"></span>
              <span>{data?.hero?.badge || "LIVE STARTUP GROWTH WORKSHOP"}</span>
            </div>
          </div>

          <h1 className="webinar-hero-title">
            {data?.hero?.title ? (
              data.hero.title.includes(data.hero.highlightWord || "Startup Brand") ? (
                <>
                  {data.hero.title.split(data.hero.highlightWord || "Startup Brand")[0]}
                  <span className="webinar-text-gradient">{data.hero.highlightWord || "Startup Brand"}</span>
                  {data.hero.title.split(data.hero.highlightWord || "Startup Brand")[1]}
                </>
              ) : (
                data.hero.title
              )
            ) : (
              "એક એવી Startup Brand બનાવો જેને લોકો યાદ રાખે."
            )}
          </h1>

          <p className="webinar-hero-sub">
            {data?.hero?.subtitle || "Practical Brand-building અને Growth Framework શીખો જે તમારી Startupને ઓળખી શકાય તેવી, વિશ્વસનીય Brandમાં બદલે."}
          </p>

          {/* PRESENTS CARD WITH MULTI-IMAGE AUTO-SLIDER */}
          <div className="webinar-card webinar-presents-card">
            <div className="webinar-presents-inner">
              <div className="webinar-presents-left">
                <div>
                  <p className="webinar-presents-tagline">{data?.presents?.tagline || "HET MANGUKIYA PRESENTS"}</p>
                  <h2 className="webinar-presents-heading">
                    {data?.presents?.title || "તમારી Brandને કેવી રીતે બનાવવી, position કરવી, market કરવી અને Growth કરાવવી."}
                  </h2>
                </div>

                <div className="webinar-pill-row">
                  {data?.presents?.tags?.map((tag, index) => (
                    <span key={index} className="webinar-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* DYNAMIC IMAGE SLIDER / STATIC CONTAINER ON THE RIGHT */}
              <div className="webinar-presents-right">
                {presentsImages.length > 1 ? (
                  <div className="webinar-slider-container">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{ delay: 3500, disableOnInteraction: false }}
                      loop={true}
                      style={{ width: "100%", height: "100%" }}
                    >
                      {presentsImages.map((imgUrl, idx) => (
                        <SwiperSlide key={idx} style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%" }}>
                          <img
                            src={imgUrl}
                            alt={`Presenter ${idx + 1}`}
                            className="webinar-presents-img"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  <img
                    src={
                      presentsImages[0] ||
                      data?.mentorSection?.image ||
                      "https://uxmagic.blob.core.windows.net/public/project-documents/6aae59e24f608cb6cbb37c74/6aae59fa4f608cb6cbb37d45/1789811337923-1c941d46-image.png"
                    }
                    alt={data?.presents?.mentorName || "Het Mangukiya"}
                    className="webinar-presents-img"
                  />
                )}

                <div className="webinar-mentor-pill-overlay">
                  <div className="role">{data?.presents?.mentorTag || "તમારા Mentor"}</div>
                  <div className="name">{data?.presents?.mentorName || "Het Mangukiya"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* URGENCY BANNER (matches webinar3.html reference) */}
          <div className="webinar-urgency-card">
            <div className="webinar-urgency-badge">
              <i className="fa-solid fa-users" style={{ fontSize: "1rem" }}></i>
              <span>{data?.urgency?.badge || "ONLY\n50 SEATS"}</span>
            </div>
            <div className="webinar-urgency-info">
              <p className="webinar-urgency-tagline">{data?.urgency?.tagline || "LIMITED AVAILABILITY"}</p>
              <p className="webinar-urgency-title">{data?.urgency?.title || "આજે જ તમારી live seat reserve કરો"}</p>
            </div>
          </div>

          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <a href="#register" onClick={scrollToRegister} className="webinar-cta-btn">
              <span>{data?.urgency?.ctaText || `₹${data?.pricing?.amount || 99} માં મારી સીટ reserve કરો`}</span>
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        {data?.problemSection && (
          <section className="webinar-section webinar-section-bordered">
            <div style={{ maxWidth: "760px" }}>
              <p className="webinar-eyebrow">{data.problemSection.eyebrow}</p>
              <h2 className="webinar-sec-title">{data.problemSection.title}</h2>
            </div>

            <div className="webinar-problem-grid">
              {data.problemSection.cards?.map((card, idx) => (
                <div key={idx} className="webinar-problem-card">
                  <div className="webinar-problem-icon">
                    <i className={card.icon?.startsWith("fa-") ? card.icon : "fa-solid fa-layer-group"}></i>
                  </div>
                  <h3 className="webinar-card-title">{card.title}</h3>
                  <p className="webinar-card-desc">{card.description}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a href="#register" onClick={scrollToRegister} className="webinar-inline-link">
                <span>{data.problemSection.ctaText}</span>
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </section>
        )}

        {/* FRAMEWORK SECTION */}
        {data?.frameworkSection && (
          <section className="webinar-section webinar-section-bordered webinar-framework-bg">
            <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
              <p className="webinar-eyebrow">{data.frameworkSection.eyebrow}</p>
              <h2 className="webinar-sec-title">{data.frameworkSection.title}</h2>
              <p className="webinar-sec-desc">{data.frameworkSection.description}</p>
            </div>

            <div className="webinar-framework-grid">
              {data.frameworkSection.steps?.map((step, idx) => (
                <div key={idx} className="webinar-framework-card">
                  <span className="webinar-step-num">{step.stepNumber}</span>
                  <div>
                    <h3 className="webinar-card-title" style={{ marginTop: 0 }}>
                      {step.title}
                    </h3>
                    <p className="webinar-card-desc" style={{ marginTop: "0.5rem" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href="#register" onClick={scrollToRegister} className="webinar-cta-btn">
                <span>{data.frameworkSection.ctaText}</span>
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </section>
        )}

        {/* TARGET AUDIENCE SECTION */}
        {data?.targetAudienceSection && (
          <section className="webinar-section webinar-section-bordered">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <p className="webinar-eyebrow">{data.targetAudienceSection.eyebrow}</p>
              <h2 className="webinar-sec-title">{data.targetAudienceSection.title}</h2>
            </div>

            <div className="webinar-audience-grid">
              {data.targetAudienceSection.cards?.map((aud, idx) => (
                <div key={idx} className="webinar-audience-card">
                  <span className="webinar-audience-emoji">{aud.emoji}</span>
                  <h3 className="webinar-card-title">{aud.title}</h3>
                  <p className="webinar-card-desc">{aud.description}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <p style={{ color: "#A0A0A0", fontSize: "0.95rem", marginBottom: "1rem" }}>
                {data.targetAudienceSection.bottomText}
              </p>
              <a href="#register" onClick={scrollToRegister} className="webinar-cta-btn">
                <span>{data.targetAudienceSection.ctaText}</span>
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </section>
        )}

        {/* MENTOR SECTION (matches webinar3.html reference) */}
        {data?.mentorSection && (
          <section className="webinar-section webinar-section-bordered">
            <div style={{ maxWidth: "760px" }}>
              <p className="webinar-eyebrow">{data.mentorSection.eyebrow}</p>
              <h2 className="webinar-sec-title">{data.mentorSection.title}</h2>
            </div>

            <div className="webinar-mentor-card">
              <div className="webinar-mentor-card-img">
                <img src={data.mentorSection.image} alt={data.mentorSection.name} />
              </div>

              <div className="webinar-mentor-card-content">
                <span className="webinar-eyebrow" style={{ fontSize: "0.78rem", marginBottom: "0.25rem" }}>{data.mentorSection.role}</span>
                <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>{data.mentorSection.name}</h3>
                <p style={{ color: "#A0A0A0", fontSize: "0.92rem", lineHeight: 1.65, marginTop: "0.85rem" }}>{data.mentorSection.bio}</p>

                {data.mentorSection.highlights && data.mentorSection.highlights.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                    {data.mentorSection.highlights.map((item, index) => (
                      <span key={index} style={{
                        background: "rgba(183, 255, 42, 0.08)",
                        border: "1px solid rgba(183, 255, 42, 0.2)",
                        color: "#FFFFFF",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                      }}>
                        <i className="fa-solid fa-check" style={{ color: "#B7FF2A", marginRight: "0.35rem" }}></i>
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ marginTop: "1.25rem" }}>
                  <a href={data.mentorSection.buttonLink || "/about"} className="webinar-mentor-link">
                    <span>{data.mentorSection.buttonText || "મારા વિશે વધુ જાણો →"}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* INSTAGRAM FEED SECTION (DYNAMIC & CONDITIONAL DISPLAY) */}
        {data?.instagramFeed && data.instagramFeed.length > 0 && (
          <section className="webinar-section webinar-section-bordered">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 2rem auto" }}>
              <p className="webinar-eyebrow" style={{ color: "#E1306C" }}>
                <i className="fa-brands fa-instagram" style={{ marginRight: "0.5rem" }}></i>
                INSTAGRAM UPDATES & INSIGHTS
              </p>
              <h2 className="webinar-sec-title">Instagram પર અમારી સાથે જોડાઓ.</h2>
              <p className="webinar-sec-desc">દરરોજ નવા Branding અને Growth વિડીયો તથા ટીપ્સ મેળવવા માટે ફોલો કરો.</p>
            </div>

            <div className="webinar-insta-grid">
              {data.instagramFeed.map((post, idx) => (
                <a key={idx} href={post.postUrl} target="_blank" rel="noopener noreferrer" className="webinar-insta-card">
                  <div className="webinar-insta-img-wrap">
                    <img src={post.imageUrl} alt={post.caption || "Instagram update"} className="webinar-insta-img" />
                    <div className="webinar-insta-overlay">
                      <i className="fa-brands fa-instagram webinar-insta-icon"></i>
                      {post.likes && <span className="webinar-insta-likes">{post.likes}</span>}
                    </div>
                  </div>
                  {post.caption && <p className="webinar-insta-caption">{post.caption}</p>}
                </a>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="webinar-cta-btn"
                style={{ background: "#E1306C", color: "#FFFFFF" }}
              >
                <i className="fa-brands fa-instagram"></i>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </section>
        )}

        {/* PRICING & RAZORPAY REGISTRATION SECTION */}
        <section id="register" className="webinar-section webinar-section-bordered" style={{ scrollMarginTop: "120px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
            <p className="webinar-eyebrow">{data?.pricing?.eyebrow || "One-time LIVE Access"}</p>
            <h2 className="webinar-sec-title">
              {data?.pricing?.title || "તમારો આગામી Growth move માત્ર ₹99થી શરૂ થાય છે."}
            </h2>
          </div>

          <div className="webinar-pricing-box">
            <div className="webinar-pricing-badge">{data?.pricing?.badge || "LIVE WEBINAR REGISTRATION"}</div>

            <div className="webinar-price-row">
              <span className="webinar-price-final">₹{data?.pricing?.amount || 99}</span>
              <span className="webinar-price-original">₹{data?.pricing?.originalAmount || 999}</span>
              <span className="webinar-price-discount">{data?.pricing?.discountText || "90% OFF"}</span>
            </div>

            <p style={{ color: "#A0A0A0", fontSize: "0.95rem", marginTop: "0.25rem", textAlign: "center" }}>
              {data?.pricing?.subtitle || "જીવનભર શિક્ષણ • Practical Learning • સાચી Brand Thinking"}
            </p>

            <form onSubmit={handleSubmit} style={{ marginTop: "1.75rem" }}>
              {/* DYNAMIC WEBINAR DATES HANDLING */}
              {data?.dates && data.dates.length > 0 && (
                <div className="webinar-date-selector-wrapper" style={{ marginBottom: "1.25rem" }}>
                  {validDates.length === 0 ? (
                    <div className="webinar-cutoff-notice">
                      <i className="fa-solid fa-clock-rotate-left" style={{ color: "#FF5C5C", fontSize: "1.2rem" }}></i>
                      <div>
                        <p style={{ color: "#FFFFFF", fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>
                          આગામી તમામ સત્રો માટે રજીસ્ટ્રેશન બંધ થઈ ગયું છે.
                        </p>
                        <p style={{ color: "#888888", margin: "0.2rem 0 0", fontSize: "0.82rem" }}>
                          નવી તારીખો ટૂંક સમયમાં જાહેર થશે. અપડેટ્સ માટે જોડાયેલા રહો.
                        </p>
                      </div>
                    </div>
                  ) : validDates.length === 1 ? (
                    <div className="webinar-single-date-badge">
                      <span className="badge-tag">સત્ર તારીખ:</span>
                      <span className="badge-date">
                        <i className="fa-solid fa-calendar-check" style={{ color: "#B7FF2A", marginRight: "0.4rem" }}></i>
                        {validDates[0]}
                      </span>
                    </div>
                  ) : (
                    <div className="webinar-multi-date-selector">
                      <label className="webinar-date-label">
                        <i className="fa-solid fa-calendar-day" style={{ color: "#B7FF2A", marginRight: "0.4rem" }}></i>
                        લાઈવ સત્રની તારીખ પસંદ કરો *
                      </label>
                      <div className="webinar-date-pills">
                        {validDates.map((dStr, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedDate(dStr)}
                            className={`webinar-date-pill ${selectedDate === dStr ? "active" : ""}`}
                          >
                            <i className={`fa-${selectedDate === dStr ? "solid fa-circle-dot" : "regular fa-circle"}`}></i>
                            <span>{dStr}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="webinar-form-group">
                <label htmlFor="fullName">પૂર્ણ નામ (Full Name) *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="તમારું સંપૂર્ણ નામ"
                  className="webinar-form-input"
                />
              </div>

              <div className="webinar-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="webinar-form-input"
                />
              </div>

              <div className="webinar-form-group">
                <label htmlFor="phoneNo">WhatsApp નંબર *</label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  required
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  placeholder="તમારો 10 અંકનો WhatsApp નંબર"
                  className="webinar-form-input"
                />
              </div>

              <div className="webinar-form-group">
                <label htmlFor="startupName">Business / Startupનું નામ</label>
                <input
                  type="text"
                  id="startupName"
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleInputChange}
                  placeholder="તમારા Venture અથવા Ideaનું નામ (ઓપ્શનલ)"
                  className="webinar-form-input"
                />
              </div>

              <div style={{ marginTop: "1.75rem" }}>
                <button
                  type="submit"
                  disabled={
                    isProcessing ||
                    createOrderMutation.isPending ||
                    Boolean(data?.dates && data.dates.length > 0 && validDates.length === 0)
                  }
                  className="webinar-cta-btn"
                  style={{
                    width: "100%",
                    borderRadius: "0.65rem",
                    padding: "0.95rem",
                    opacity: Boolean(data?.dates && data.dates.length > 0 && validDates.length === 0) ? 0.5 : 1,
                    cursor: Boolean(data?.dates && data.dates.length > 0 && validDates.length === 0) ? "not-allowed" : "pointer",
                  }}
                >
                  <span>
                    {isProcessing || createOrderMutation.isPending
                      ? "Razorpay ચુકવણી પ્રક્રિયા શરૂ થઈ રહી છે..."
                      : data?.dates && data.dates.length > 0 && validDates.length === 0
                      ? "રજીસ્ટ્રેશન બંધ થયેલ છે"
                      : data?.pricing?.submitButtonText || `₹${data?.pricing?.amount || 99} ભરીને હમણાં register કરો →`}
                  </span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </form>

            <div style={{ marginTop: "1.25rem", textAlign: "center", fontSize: "0.82rem", color: "#A0A0A0" }}>
              {data?.pricing?.trustNote || "🔒 Secure Payment Gateway • 📩 તુરંત Registration Confirmation"}
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        {data?.faqs && data.faqs.length > 0 && (
          <section className="webinar-section webinar-section-bordered">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <p className="webinar-eyebrow">વારંવાર પૂછાતા પ્રશ્નો</p>
              <h2 className="webinar-sec-title">તમારે જાણવું જરૂરી બધું.</h2>
            </div>

            <div className="webinar-faq-list">
              {data.faqs.map((faq, i) => (
                <details key={i} className="webinar-faq-item" open={i === 0}>
                  <summary className="webinar-faq-summary">
                    <span>{faq.question}</span>
                    <i className="fa-solid fa-plus webinar-faq-icon"></i>
                  </summary>
                  <div className="webinar-faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href="#register" onClick={scrollToRegister} className="webinar-cta-btn">
                <span>{`₹${data.pricing?.amount || 99} માં મારી સીટ reserve કરો`}</span>
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </section>
        )}
      </main>

      {/* MOBILE FLOATING BAR */}
      <div className="webinar-mobile-bar">
        <div>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B7FF2A", display: "block" }}>LIVE WEBINAR</span>
          <span className="webinar-mobile-price">₹{data?.pricing?.amount || 99}</span>
        </div>
        <a href="#register" onClick={scrollToRegister} className="webinar-mobile-btn">
          <span>Reserve Seat</span>
          <i className="fa-sharp fa-regular fa-arrow-right" style={{ marginLeft: "0.3rem" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Webinar;
