import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, 
  faLaptopCode, 
  faMobileScreenButton,
  faWind,
  faShop,
  faPeopleArrows,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import ServiceIllus from "./../assets/ServiceIllustration.png";

const ServicesSection = () => {
  const [showDescriptions, setShowDescriptions] = useState({
    webDevelopment: false,
    mobileAppDevelopment: false,
    uiUxDesign: false,
    ecommerceSolutions: false,
    digitalMarketing: false,
    cloudComputing: false,
  });

  const toggleDescription = (service) => {
    setShowDescriptions((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  return (
    <div id="services-section" >
      <h1 className="text-center text-4xl font-bold my-10">Our Services</h1>
      <div className="md:flex md:justify-center md:items-center">
      <div>
        <img
          className="w-64 md:w-[450px] lg:w-[600px] mx-auto animate-float"
          src={ServiceIllus}
          alt="Services"
        />
      </div>
      {/* Services */}
      <div className="m-10 max-w-[300px] bg-[#64efae] rounded-xl drop-shadow-xl">
        <div className="p-5">
          <div className="flex items-center border-b-2 pb-3">
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ color: "#fff" }}
              className="mr-3 fa-xl drop-shadow-lg"
            />
            <h3 className="text-white text-[16px]">Web Development</h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className={`fa-xl ml-auto drop-shadow cursor-pointer transition-transform duration-300 ${
                showDescriptions.webDevelopment ? "rotate-180" : ""
              }`}
              onClick={() => toggleDescription("webDevelopment")}
            />
          </div>
          {showDescriptions.webDevelopment && (
            <div className="mt-4">
              <p className="text-white text-[12px]">
                We specialize in designing and developing custom websites
                tailored to your business needs. Our experienced team of
                developers creates responsive and user-friendly websites using
                the latest technologies.
              </p>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center border-b-2 pb-3">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              style={{ color: "#fff" }}
              className="mr-2 fa-xl drop-shadow-lg"
            />
            <h3 className="ml-4 text-white text-[16px]">
              Mobile App Development
            </h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className={`fa-xl ml-auto drop-shadow cursor-pointer transition-transform duration-300 ${
                showDescriptions.mobileAppDevelopment ? "rotate-180" : ""
              }`}
              onClick={() => toggleDescription("mobileAppDevelopment")}
            />
          </div>
          {showDescriptions.mobileAppDevelopment && (
            <div className="mt-4">
              <p className="text-white text-[12px]">
                Our mobile app development services cover iOS and Android
                platforms. Whether you need a native app or a cross-platform
                solution, we have the expertise to deliver high-quality mobile
                applications that drive engagement and enhance user experience.
              </p>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center border-b-2 pb-3">
            <FontAwesomeIcon
              icon={faWind}
              style={{ color: "#fff" }}
              className="mr-5 fa-xl drop-shadow-lg"
            />
            <h3 className="text-white text-[16px]">UI/UX Design</h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className={`fa-xl ml-auto drop-shadow cursor-pointer transition-transform duration-300 ${
                showDescriptions.uiUxDesign ? "rotate-180" : ""
              }`}
              onClick={() => toggleDescription("uiUxDesign")}
            />
          </div>
          {showDescriptions.uiUxDesign && (
            <div className="mt-4">
              <p className="text-white text-[12px]">
                Our UI/UX design team focuses on creating visually appealing and
                intuitive user interfaces. We conduct thorough research and
                analysis to understand your target audience and design
                interfaces that optimize usability and enhance brand perception.
              </p>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center border-b-2 pb-3">
            <FontAwesomeIcon
              icon={faShop}
              style={{ color: "#fff" }}
              className="fa-xl drop-shadow-lg"
            />
            <h3 className="ml-4 text-white text-[16px]">
              E-commerce Solutions
            </h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className={`fa-xl ml-auto drop-shadow cursor-pointer transition-transform duration-300 ${
                showDescriptions.ecommerceSolutions ? "rotate-180" : ""
              }`}
              onClick={() => toggleDescription("ecommerceSolutions")}
            />
          </div>
          {showDescriptions.ecommerceSolutions && (
            <div className="mt-4">
              <p className="text-white text-[12px]">
                We provide end-to-end e-commerce solutions, including online
                store development, payment gateway integration, and inventory
                management. Our e-commerce solutions are scalable, secure, and
                designed to maximize your online sales potential.
              </p>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center border-b-2 pb-3">
            <FontAwesomeIcon
              icon={faPeopleArrows}
              style={{ color: "#fff" }}
              className="fa-xl drop-shadow-lg"
            />
            <h3 className="ml-4 text-white text-[16px]">Digital Marketing</h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className={`fa-xl ml-auto drop-shadow cursor-pointer transition-transform duration-300 ${
                showDescriptions.digitalMarketing ? "rotate-180" : ""
              }`}
              onClick={() => toggleDescription("digitalMarketing")}
            />
          </div>
          {showDescriptions.digitalMarketing && (
            <div className="mt-4">
              <p className="text-white text-[12px]">
                Our digital marketing services help you reach your target
                audience and achieve your business goals. From search engine
                optimization (SEO) and social media marketing to content
                creation and email campaigns, we develop data-driven strategies
                to drive traffic, generate leads, and increase conversions.
              </p>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center border-b-2 pb-3">
            <FontAwesomeIcon
              icon={faCloud}
              style={{ color: "#fff" }}
              className="fa-xl drop-shadow-lg"
            />
            <h3 className="ml-4 text-white text-[16px]">Cloud Computing</h3>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className={`fa-xl ml-auto drop-shadow cursor-pointer transition-transform duration-300 ${
                showDescriptions.cloudComputing ? "rotate-180" : ""
              }`}
              onClick={() => toggleDescription("cloudComputing")}
            />
          </div>
          {showDescriptions.cloudComputing && (
            <div className="mt-4">
              <p className="text-white text-[12px]">
                We offer cloud computing solutions to help businesses optimize
                their infrastructure and streamline operations. From cloud
                migration and server management to data storage and security,
                our experts ensure that your business leverages the power of the
                cloud effectively.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ServicesSection;