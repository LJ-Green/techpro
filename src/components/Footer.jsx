import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div className="p-10 bg-[#cfcfcf]">
      <ul className="flex space-x-4 mb-5">
        <li>
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a
            href="#about-section"
            className="text-gray-800 hover:text-gray-600"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services-section"
            className="text-gray-800 hover:text-gray-600"
          >
            Services
          </a>
        </li>
        <li>
          <a href="#team-section" className="text-gray-800 hover:text-gray-600">
            Team
          </a>
        </li>
        <li>
          <a href="#book-section" className="text-gray-800 hover:text-gray-600">
            Book
          </a>
        </li>
      </ul>
      <p className="text-center text-[12px]">
        All Rights Reserved: TechPro Solutions LTD.
      </p>
      <div className="flex my-10">
        <div className="three-body drop-shadow-lg">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
