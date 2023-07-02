import React from "react";
import AboutPic from "./../assets/AboutPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faThumbsUp,
  faAward,
  faCrown,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

const VideoSection = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-10 md:items-center md:my-20">
        <div className="w-72 h-72 md:w-[400px] md:h-[400px] relative drop-shadow-lg">
          <img
            src={AboutPic}
            className="rounded-xl fill absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center my-10">
          <div className="icon-container flex items-center">
            <div className="flex flex-col">
              <FontAwesomeIcon
                className="drop-shadow-lg animate-float"
                style={{
                  color: "#00e07f",
                  fontSize: "50px",
                  marginBottom: "20px",
                  animationDelay: "0s",
                }}
                icon={faSquareCheck}
              />
              <FontAwesomeIcon
                className="drop-shadow-lg animate-float"
                style={{
                  color: "#00e07f",
                  fontSize: "50px",
                  marginBottom: "20px",
                  animationDelay: "0.5s",
                }}
                icon={faThumbsUp}
              />
              <FontAwesomeIcon
                className="drop-shadow-lg animate-float"
                style={{
                  color: "#00e07f",
                  fontSize: "50px",
                  marginBottom: "20px",
                  animationDelay: "1s",
                }}
                icon={faAward}
              />
              <FontAwesomeIcon
                className="drop-shadow-lg animate-float"
                style={{
                  color: "#00e07f",
                  fontSize: "50px",
                  marginBottom: "20px",
                  animationDelay: "1.5s",
                }}
                icon={faCrown}
              />
              <FontAwesomeIcon
                className="drop-shadow-lg animate-float"
                style={{
                  color: "#00e07f",
                  fontSize: "50px",
                  marginBottom: "20px",
                  animationDelay: "2s",
                }}
                icon={faCoins}
              />
            </div>
          </div>
          <div className="text-container ml-4">
            <div className="flex flex-col font-bold">
              <h3 className="text-[16px] text-center mb-[40px]">
                Over 500 Successful Projects
              </h3>
              <h3 className="text-[16px] text-center mb-[40px]">
                95% Client Satisfaction
              </h3>
              <h3 className="text-[16px] text-center mb-[40px]">
                Award Winning Solution Model
              </h3>
              <h3 className="text-[16px] text-center mb-[40px]">
                Extensive Industry Experience
              </h3>
              <h3 className="text-[16px] text-center mb-[40px]">
                Estimated ROI of 2 Months
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
