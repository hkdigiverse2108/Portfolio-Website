import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ROUTES } from "../../Constant";
import "./webinar.css";

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();

  const registrationId = searchParams.get("registrationId") || "";
  const date = searchParams.get("date") || "";
  const paymentId = searchParams.get("paymentId") || searchParams.get("id") || "";
  const orderId = searchParams.get("orderId") || "";
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const amount = searchParams.get("amount") || "99";

  const displayRegId =
    registrationId ||
    (orderId ? `REG-${orderId.replace("order_", "").toUpperCase()}` : `REG-${Date.now().toString().slice(-6)}`);

  return (
    <div className="webinar-page-root">
      <div className="webinar-ambient-top"></div>

      <div className="webinar-container" style={{ maxWidth: 780, paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div
          style={{
            background: "#090909",
            border: "1px solid #202020",
            borderRadius: "1.5rem",
            padding: "2.5rem 2rem",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top subtle highlight glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #B7FF2A, transparent)",
            }}
          ></div>

          {/* Success Icon */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(183, 255, 42, 0.12)",
              border: "2px solid #B7FF2A",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              color: "#B7FF2A",
              fontSize: "2rem",
            }}
          >
            <i className="fa-solid fa-check"></i>
          </div>

          <div
            style={{
              display: "inline-block",
              background: "rgba(183, 255, 42, 0.1)",
              border: "1px solid rgba(183, 255, 42, 0.3)",
              color: "#B7FF2A",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            REGISTRATION & PAYMENT CONFIRMED
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            અભિનંદન! તમારું રજીસ્ટ્રેશન સફળ થયું છે.
          </h1>

          <p
            style={{
              color: "#A0A0A0",
              fontSize: "1rem",
              maxWidth: "540px",
              margin: "0 auto 1.75rem auto",
              lineHeight: 1.6,
            }}
          >
            તમે <strong>Het Mangukiya</strong> ના Live Startup Growth Workshop માટે સફળતાપૂર્વક રજીસ્ટર થઈ ગયા છો. સત્રમાં હાજરી નોંધાવવા માટે નીચેનો પાસ સાચવી રાખો.
          </p>

          {/* ========================================================= */}
          {/* PRINTABLE EVENT ENTRY PASS / ATTENDANCE BOX (PRINT TARGET) */}
          {/* ========================================================= */}
          <div id="printable-pass-card" className="webinar-printable-pass">
            <div className="pass-header-row">
              <div>
                <span className="pass-super-tag">OFFICIAL EVENT ENTRY PASS</span>
                <h3 className="pass-event-title">Het Mangukiya &bull; Live Startup Workshop</h3>
              </div>
              <div className="pass-status-pill">
                <i className="fa-solid fa-circle-check"></i> CONFIRMED
              </div>
            </div>

            {/* PROMINENT REGISTRATION ID BOX */}
            <div className="pass-reg-id-container">
              <span className="pass-reg-label">REGISTRATION ID / હાજરી નંબર</span>
              <span className="pass-reg-number">{displayRegId}</span>
              <span className="pass-reg-sub">હાજરી પૂરવા માટે આ Registration ID બતાવવો અનિવાર્ય છે</span>
            </div>

            {/* ATTENDANCE & PARTICIPANT DETAILS */}
            <div className="pass-grid">
              {date && (
                <div className="pass-grid-item">
                  <span className="pass-grid-label">સત્ર તારીખ (Session Date)</span>
                  <span className="pass-grid-value" style={{ color: "#B7FF2A" }}>
                    <i className="fa-solid fa-calendar-day" style={{ marginRight: 6 }}></i>
                    {date}
                  </span>
                </div>
              )}

              {name && (
                <div className="pass-grid-item">
                  <span className="pass-grid-label">સહભાગીનું નામ (Attendee Name)</span>
                  <span className="pass-grid-value">{name}</span>
                </div>
              )}

              {phone && (
                <div className="pass-grid-item">
                  <span className="pass-grid-label">WhatsApp / મોબાઈલ</span>
                  <span className="pass-grid-value">{phone}</span>
                </div>
              )}

              {email && (
                <div className="pass-grid-item">
                  <span className="pass-grid-label">Email Address</span>
                  <span className="pass-grid-value">{email}</span>
                </div>
              )}

              <div className="pass-grid-item">
                <span className="pass-grid-label">ચુકવણી સ્થિતિ (Payment Status)</span>
                <span className="pass-grid-value" style={{ color: "#B7FF2A" }}>
                  PAID &bull; ₹{amount}
                </span>
              </div>

              {paymentId && (
                <div className="pass-grid-item">
                  <span className="pass-grid-label">Payment Ref ID</span>
                  <span className="pass-grid-value" style={{ fontFamily: "monospace" }}>
                    {paymentId}
                  </span>
                </div>
              )}
            </div>

            <div className="pass-footer">
              <span>🔒 Verified Attendee &bull; Non-Transferable</span>
              <span>Het Mangukiya Portfolio</span>
            </div>
          </div>

          {/* Important Next Steps */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px dashed #282828",
              borderRadius: "0.75rem",
              padding: "1rem 1.25rem",
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            <p style={{ color: "#B7FF2A", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
              <i className="fa-solid fa-circle-info" style={{ marginRight: "0.5rem" }}></i>
              મહત્વની સૂચનાઓ:
            </p>
            <ul style={{ color: "#aaa", fontSize: "0.82rem", margin: 0, paddingLeft: "1.2rem", lineHeight: 1.6 }}>
              <li>લાઈવ સેશન શરૂ થવાના ૨ કલાક પહેલા WhatsApp અને Email પર Zoom Link મોકલવામાં આવશે.</li>
              <li>લાઈવ સેશન અટેન્ડ કરનાર તમામને ૪૮ કલાક માટે Exclusive Revision Recording પણ મળશે.</li>
              <li>સત્રમાં પ્રવેશ વખતે તમારો Registration ID સાચવી રાખવો.</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <button
              type="button"
              onClick={() => window.print()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#B7FF2A",
                color: "#050505",
                fontWeight: 700,
                padding: "0.8rem 1.75rem",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
                fontSize: "0.95rem",
                boxShadow: "0 4px 15px rgba(183, 255, 42, 0.3)",
              }}
            >
              <i className="fa-solid fa-print"></i> હાજરી પાસ પ્રિન્ટ કરો (Print Pass)
            </button>

            <Link
              to={ROUTES.HOME}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#151515",
                color: "#fff",
                border: "1px solid #333",
                fontWeight: 600,
                padding: "0.8rem 1.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
                fontSize: "0.95rem",
                transition: "all 0.2s ease",
              }}
            >
              Home પેજ પર જાઓ <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
