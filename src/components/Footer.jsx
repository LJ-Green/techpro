import React from "react";

const Footer = () => {
  return (
    <div className="p-10">
      <ul className="flex space-x-4 mb-5">
        <li>
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about-section" className="text-gray-800 hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a href="#services-section" className="text-gray-800 hover:text-gray-600">
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
      <p className="text-center text-[12px]">All Rights Reserved: TechPro Solutions LTD.</p>
    </div>
  );
};

export default Footer;
