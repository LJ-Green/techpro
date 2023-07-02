import React, { useState } from "react";
import LogoIcon from "./../assets/IconLogo.png";
import Name from "./../assets/CompanyName.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div id="book-section" className="bg-[#57eebc] text-center">
      <h1 className="text-[40px] pt-5 text-white font-bold">Ready?</h1>
      <div>
        <h2 className="font-bold text-white text-[20px] p-5">
          TechPro Solutions - Your Partner in Digital Transformation!
        </h2>
        <p className="p-5 text-white mb-5 max-w-[800px] mx-auto">
          Let's take your business to new heights with cutting-edge digital
          solutions? We'd love to hear from you! Fill out the form below and let
          us know a little about your company and goals.
        </p>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="max-w-[350px] mx-auto">
            <input
              className="bg-[#51d5a9] w-full pl-4 p-2 rounded-full shadow-inner placeholder-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#51d5a9] my-5 w-full pl-4 p-2 rounded-full shadow-inner placeholder-white"
              type="text"
              placeholder="Email"
            />
            <input
              className="bg-[#51d5a9] mb-5 pb-[110px] w-full h-[150px] pl-4 p-2 rounded-2xl shadow-inner placeholder-white"
              type="text"
              placeholder="Message"
            />
            <button className="bg-[#cfcfcf] rounded-full px-10 p-3 text-white drop-shadow-md w-full">
              Submit
            </button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="modal">
          <div className="modal-content bg-[#47e58c] text-black p-5 m-5 rounded-xl shadow-inner max-w-[350px] mx-auto">
            <h3 className="text-[22px] font-bold">🎉 Congratulations! 🎉</h3>
            <p className="my-5">
              You've taken the first step towards unleashing the power of
              technology for your business. We have received your information
              and our team of experts will be in touch with you shortly. Get
              ready for a digital revolution like no other!
            </p>
            <button
              className="close-button bg-[#525252] w-10 h-10 rounded-full drop-shadow"
              onClick={closePopup}
            >
              <FontAwesomeIcon icon={faTimes} style={{ color: "#ffffff" }} />
            </button>
          </div>
        </div>
      )}
      <p className="p-5 text-white max-w-[800px] mx-auto">
        Remember, at TechPro Solutions, we're passionate about helping
        businesses thrive in the digital era. So sit back, relax, and let us
        take care of your digital transformation journey. We can't wait to work
        with you!
      </p>
      <div className="w-full flex p-5">
        <div className="border-[5px] p-6 rounded-full bg-black bg-opacity-20 drop-shadow">
          <img
            src={LogoIcon}
            className="w-[100px] drop-shadow animate-float"
            alt="logo"
          />
        </div>
      </div>
      <img className="opacity-80 mx-auto max-w-[300px] pb-10" src={Name} alt="" />
    </div>
  );
};

export default ContactSection;