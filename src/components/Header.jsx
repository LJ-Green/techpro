import React from "react";
import "../index.css";
import LogoIcon from './../assets/IconLogo.png';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />

      <div className="flex flex-col md:flex-row md:p-10 lg:mx-[100px] md:mb-[100px]">
        <div className="border-[5px] p-6 rounded-full bg-black bg-opacity-20 drop-shadow">
          <img src={LogoIcon} className="w-[200px] md:w-[400px] xl:[600px] drop-shadow animate-float" alt="logo" />
          </div>
        <div className="text-left md:ml-10 m-8 max-w-[400px]">
          <h1 className="text-[30px] md:text-[40px] font-bold my-5 ">Delivering Digital Solutions</h1>
          <h2 className="text-[22px] md:text-[30px] font-bold mb-1">Welcome to TechPro</h2>
          <p className="text-[16px] md:text-[20px]">
            Empowering businesses with innovative digital solutions. We develop
            software applications, mobile apps, and websites to enhance your
            digital presence, streamline operations, and drive growth.
            Experience the power of technology with us.
          </p>
        </div>
      </div>

      {/* Waves */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
