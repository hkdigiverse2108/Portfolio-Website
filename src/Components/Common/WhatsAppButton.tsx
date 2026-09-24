import React from "react";
import { Queries } from "../../Api";

export const WhatsAppButton: React.FC = () => {
  const { data: settingRes } = Queries.useGetSetting();
  const { data: userRes } = Queries.useGetUser();

  const settingPhone = settingRes?.data?.bookMeeting?.phoneNo;
  const userPhone = userRes?.data?.phoneNo;

  const rawCode = settingPhone?.countryCode || userPhone?.countryCode || "91";
  const cleanCode = rawCode.replace(/[^0-9]/g, "");
  const rawNumber = String(settingPhone?.number || userPhone?.number || "");
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");

  const fullPhone = cleanNumber ? `${cleanCode}${cleanNumber}` : "919714397143";
  const whatsappUrl = `https://wa.me/${fullPhone}?text=${encodeURIComponent("Hello Het, I visited your portfolio and would like to connect with you.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat with me</span>
    </a>
  );
};

export default WhatsAppButton;
