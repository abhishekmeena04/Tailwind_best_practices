import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsup = () => {
  const phoneNumber = 9827566365;
  const openWhatsApp = () => {
    // Replace 'your_number' with your actual WhatsApp number including country code
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <FaWhatsapp
      onClick={openWhatsApp}
      className="cursor-pointer iconsOpacity"
    />
  );
};

export default Whatsup;
