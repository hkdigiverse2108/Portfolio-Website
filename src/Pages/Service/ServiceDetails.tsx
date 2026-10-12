import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Queries } from "../../Api";
import { BreadCrumb, PreLoader } from "../../Components/Common";
import { ROUTES, getServiceSeoByIdOrSlug, resolveServiceId } from "../../Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { OurServiceBase } from "../../Types";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { data: userRes } = Queries.useGetUser();
  const userData = userRes?.data;
  const { data: settingRes } = Queries.useGetSetting();
  const settingData = settingRes?.data;

  const { id } = useParams();
  const serviceId = resolveServiceId(id);
  const seoData = getServiceSeoByIdOrSlug(id);

  const { data: serviceDetailData, isLoading: detailLoading } = Queries.useGetServiceDetails(serviceId);
  const { data: allServicesData, isLoading: servicesLoading } = Queries.useGetOurService();

  const service = serviceDetailData?.data;
  const allServices = allServicesData?.data?.ourService_data.filter((item: OurServiceBase) => item._id !== serviceId).slice(0, 7) || [];
  const isLoading = detailLoading || servicesLoading;

  const phoneStr = settingData?.bookMeeting?.phoneNo
    ? `+${settingData.bookMeeting.phoneNo.countryCode} ${settingData.bookMeeting.phoneNo.number}`
    : "+91 97143 97143";
  const telHref = `tel:${phoneStr.replace(/[^0-9+]/g, "")}`;
  const consultationLink = settingData?.bookMeeting?.link || ROUTES.CONTACT;

  useEffect(() => {
    if (service?.title || seoData) {
      const pageTitle = seoData?.metaTitle || `${service?.title || "Services"} | Het Mangukiya`;
      document.title = pageTitle;

      const desc =
        seoData?.metaDescription ||
        service?.shortDescription ||
        service?.tagLine ||
        "Professional digital marketing and growth services by Het Mangukiya.";

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", desc);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", pageTitle);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", desc);

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute("content", desc);

      const canonicalParam = seoData?.slug || id || serviceId;
      const pageUrl = `https://hetmangukiya.in/services/${canonicalParam}`;
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", pageUrl);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.setAttribute("href", pageUrl);
      } else {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = pageUrl;
        document.head.appendChild(canonical);
      }
    }
  }, [service, id, serviceId, seoData]);

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb 
        title={seoData?.h1 || service?.title || "Services"} 
        pageName={service?.title || "Services"} 
        parentName="Services"
        parentLink={ROUTES.SERVICE}
      />
      <section className="service-details-section section-padding section-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="service-details-post">
                <div className="single-service-post">
                  {service?.thumbnailImage && (
                    <div className="service-thumb">
                      <img src={service.thumbnailImage} alt="img" />
                    </div>
                  )}
                  <div className="post-content">
                    <h1 className="mb-3" style={{ fontSize: "2rem", fontWeight: 700 }}>
                      {seoData?.h1 || service?.title}
                    </h1>

                    {/* Quick Action Buttons */}
                    <div className="service-quick-actions">
                      <a href={telHref} className="service-action-btn service-call-btn" id="service-header-call-btn">
                        <i className="fa-solid fa-phone"></i>
                        <span>Call Now</span>
                      </a>
                      <a
                        href={consultationLink}
                        target={consultationLink.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="service-action-btn service-consult-btn"
                        id="service-header-consult-btn"
                      >
                        <i className="fa-regular fa-calendar-check"></i>
                        <span>Book Consultation</span>
                      </a>
                    </div>

                    <div
                      className="dynamic-blog-content"
                      dangerouslySetInnerHTML={{
                        __html: (service?.description || "").replace(/&nbsp;/g, " "),
                      }}
                    />
                    <div className="row g-4 mt-4 mb-4">
                      {service?.images &&
                        service.images.length > 0 &&
                        service.images.length <= 2 &&
                        service.images.map((image: string, index: number) => (
                          <div className="col-md-6" key={index}>
                            <div className="post-thumb">
                              <img src={image} alt="img" />
                            </div>
                          </div>
                        ))}
                      {service?.images && service.images.length > 2 && (
                        <div className="col-md-12">
                          <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                              0: { slidesPerView: 1 },
                              768: { slidesPerView: 2 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                          >
                            {service.images.map((image: string, index: number) => (
                              <SwiperSlide key={index}>
                                <div className="post-thumb">
                                  <img src={image} alt="img" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>

                    {service?.tagLine && (
                      <div className="highlight-text">
                        <div className="qoute-shape">
                          <img src="/assets/img/service/5.png" alt="shape" />
                        </div>
                        <div className="content">
                          <h6>{service.tagLine}</h6>
                          <div className="info">
                            <img src={userData?.profileImage || "/assets/img/service/4.png"} alt="img" className="logo-img" />
                            <h5>{userData?.firstName + " " + userData?.lastName}</h5>
                          </div>
                        </div>
                      </div>
                    )}

                    {service?.whyChoose && (
                      <div className="why-choose-wrapper mt-4">
                        <h3 className="mb-3">{service.whyChoose.title}</h3>
                        <div
                          className="dynamic-blog-content"
                          dangerouslySetInnerHTML={{
                            __html: (service.whyChoose.description || "").replace(/&nbsp;/g, " "),
                          }}
                        />
                      </div>
                    )}

                    <div className="post-list mt-3">
                      {service?.serviceIds?.map((item: { name: string }, idx: number) => (
                        <div key={idx} className="post-item">
                          <div className="icon">
                            <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                          </div>
                          <div className="content">
                            <h6>{item.name}</h6>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="service-bottom-call-banner mt-5">
                      <div className="row align-items-center g-3">
                        <div className="col-md-7 col-12">
                          <h4>Looking to get started with {service?.title || "our services"}?</h4>
                          <p>Speak directly with Het Mangukiya for tailored business and growth solutions.</p>
                        </div>
                        <div className="col-md-5 col-12 text-md-end text-start">
                          <a href={telHref} className="theme-btn service-banner-call-btn" id="service-bottom-call-btn">
                            <i className="fa-solid fa-phone"></i> Call Now
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar">
                {allServices?.length > 0 && (
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Service List</h3>
                    </div>
                    <div className="service-list">
                      <ul>
                        {allServices?.map((item: OurServiceBase, idx: number) => {
                          const itemSlug = getServiceSeoByIdOrSlug(item._id)?.slug || item._id;
                          return (
                            <li key={item._id || idx} onClick={() => navigate(ROUTES.SERVICE_DETAIL.replace(":id", itemSlug))}>
                              <a href={ROUTES.SERVICE_DETAIL.replace(":id", itemSlug)}>{item.title}</a>
                              <img src="/assets/img/icon/43.svg" alt="icon" />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Sidebar Call Widget */}
                <div className="single-sidebar-widget service-call-widget">
                  <div className="call-widget-inner">
                    <div className="call-widget-icon-wrap">
                      <div className="call-widget-icon">
                        <i className="fa-solid fa-phone-volume"></i>
                      </div>
                      <span className="pulse-ring"></span>
                    </div>
                    <div className="call-widget-content">
                      <span className="call-widget-badge">Direct Consultation</span>
                      <h4 className="call-widget-title">Have Questions? Call Now</h4>
                      <p className="call-widget-desc">Speak directly with Het Mangukiya for tailored business and growth solutions.</p>
                      <a href={telHref} className="call-widget-phone-link" id="service-sidebar-phone-link">
                        <i className="fa-solid fa-phone"></i>
                        <span>{phoneStr}</span>
                      </a>
                      <a href={telHref} className="theme-btn call-widget-cta-btn" id="service-sidebar-call-btn">
                        <i className="fa-solid fa-phone"></i>
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Now Button (Stacks cleanly above WhatsApp button) */}
      <a
        href={telHref}
        className="service-float-call-btn"
        id="service-float-call-btn"
        aria-label={`Call now: ${phoneStr}`}
        title={`Call Now: ${phoneStr}`}
      >
        <i className="fa-solid fa-phone"></i>
        <span className="service-call-tooltip">Call Now: {phoneStr}</span>
      </a>
    </>
  );
};

export default ServiceDetails;
