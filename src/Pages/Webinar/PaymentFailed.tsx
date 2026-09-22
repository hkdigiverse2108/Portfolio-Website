import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ROUTES } from "../../Constant";
import "./webinar.css";

const PaymentFailed: React.FC = () => {
  const [searchParams] = useSearchParams();

  const reason = searchParams.get("reason") || searchParams.get("error") || "User cancelled payment or transaction was declined.";
  const orderId = searchParams.get("orderId") || "";

  return (
    <div className="webinar-page-root">
      <div className="webinar-ambient-top"></div>

      <div className="webinar-container" style={{ maxWidth: 680, paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div
          style={{
            background: "#090909",
            border: "1px solid #281a1a",
            borderRadius: "1.5rem",
            padding: "2.5rem 2rem",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top red glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "250px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #EF4444, transparent)",
            }}
          ></div>

          {/* Alert Icon */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(239, 68, 68, 0.12)",
              border: "2px solid #EF4444",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              color: "#EF4444",
              fontSize: "2rem",
            }}
          >
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>

          <div
            style={{
              display: "inline-block",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#EF4444",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            PAYMENT UNSUCCESSFUL
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            ચુકવણી અસફળ રહી છે
          </h1>

          <p
            style={{
              color: "#A0A0A0",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto 1.75rem auto",
              lineHeight: 1.6,
            }}
          >
            તમારી પેમેન્ટ પ્રક્રિયા પૂર્ણ થઈ શકી નથી અથવા રદ કરવામાં આવી છે. જો તમારા બેંક ખાતામાંથી કોઈ રકમ કપાઈ હોય, તો તે ૨-૩ કાર્યકારી દિવસમાં આપોઆપ રિફંડ થઈ જશે.
          </p>

          {/* Error Details */}
          <div
            style={{
              background: "#050505",
              border: "1px solid #202020",
              borderRadius: "0.75rem",
              padding: "1.2rem",
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "0.35rem" }}>
              <strong>Status Reason:</strong>
            </div>
            <div style={{ color: "#EF4444", fontSize: "0.88rem", fontFamily: "monospace", wordBreak: "break-all" }}>
              {reason}
            </div>
            {orderId && (
              <div style={{ marginTop: "0.6rem", fontSize: "0.82rem", color: "#666" }}>
                Order Ref: {orderId}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <Link
              to={ROUTES.BOOK_A_DEMO}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#B7FF2A",
                color: "#050505",
                fontWeight: 700,
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <i className="fa-solid fa-rotate-left"></i> ફરી પ્રયાસ કરો (Retry)
            </Link>

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
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              Home પેજ પર જાઓ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
