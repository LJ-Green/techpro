import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

import mHeadshot1 from "./../assets/mHeadshot1.jpg";
import fHeadshot2 from "./../assets/fHeadshot2.jpg";
import fHeadshot3 from "./../assets/fHeadshot3.jpg";
import mHeadshot4 from "./../assets/mHeadshot4.jpg";
import fHeadshot5 from "./../assets/fHeadshot5.jpg";
import mHeadshot6 from "./../assets/mHeadshot6.jpg";
import fHeadshot7 from "./../assets/fHeadshot7.jpg";
import mHeadshot8 from "./../assets/mHeadshot8.jpg";
import fHeadshot9 from "./../assets/fHeadshot9.jpg";
import mHeadshot10 from "./../assets/mHeadshot10.jpg";

SwiperCore.use([Navigation, Pagination]);

const TeamSection = () => {
  const teamMembers = [
    // staff data
    {
      name: "John Smith",
      jobTitle: "CEO",
      bio:
        "John is the founder and CEO of our company. With over 15 years of experience in the digital solutions industry, he is passionate about helping businesses achieve their online goals.",
      image: mHeadshot1,
    },
    {
      name: "Emily Johnson",
      jobTitle: "Chief Technology Officer",
      bio:
        "Emily oversees our technology department, leading the development of innovative solutions. Her expertise in software engineering ensures that our products are cutting-edge and reliable.",
      image: fHeadshot2,
    },
    {
      name: "Jessica Brown",
      jobTitle: "Marketing Manager",
      bio:
        "Jessica is responsible for creating and implementing our marketing strategies. She has a deep understanding of digital marketing trends and uses her expertise to drive brand awareness and lead generation.",
      image: fHeadshot3,
    },
    {
      name: "Michael Davis",
      jobTitle: "Human Resources Manager",
      bio:
        "Michael manages our HR department, handling employee recruitment, development, and engagement. He ensures that our company maintains a positive work culture and supports the growth of our talented team.",
      image: mHeadshot4,
    },
    {
      name: "Jane Thompson",
      jobTitle: "Lead Developer",
      bio:
        "Jane is an experienced lead developer with expertise in building scalable and efficient web applications. She leads the development team, ensuring high-quality code and timely project delivery.",
      image: fHeadshot5,
    },
    {
      name: "Mark Wilson",
      jobTitle: "Junior Frontend Developer",
      bio:
        "Mark is a talented frontend developer who specializes in creating intuitive and user-friendly interfaces. He works closely with the design team to bring the vision to life and deliver exceptional user experiences.",
      image: mHeadshot6,
    },
    {
      name: "Sarah Anderson",
      jobTitle: "Backend Developer",
      bio:
        "Sarah is a skilled backend developer with expertise in building robust and secure server-side applications. She works on implementing complex business logic and optimizing system performance.",
      image: fHeadshot7,
    },
    {
      name: "Alex Johnson",
      jobTitle: "UX/UI Designer",
      bio:
        "Alex is a creative UX/UI designer who crafts visually appealing and engaging user interfaces. With a keen eye for detail and a deep understanding of user behavior, Alex ensures delightful user experiences.",
      image: mHeadshot8,
    },
    {
      name: "Olivia Brown",
      jobTitle: "Sales Manager",
      bio:
        "Olivia is a results-driven sales manager who leads the sales team to achieve revenue targets. Her strategic approach and strong negotiation skills contribute to the company's growth and success.",
      image: fHeadshot9,
    },
    {
      name: "David Miller",
      jobTitle: "Hiring Manager",
      bio:
        "David is responsible for managing the hiring process and recruiting top talent for the company. He ensures a smooth recruitment process and identifies candidates who align with the company's values and goals.",
      image: mHeadshot10,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const activeMember = teamMembers[activeIndex];

  return (
    <div id="team-section">
      <h1 className="text-center my-12 text-4xl font-bold">Meet Your Team</h1>
      <div className="image-slider-container">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          className="image-slider max-w-[600px] px-10"
          onSlideChange={handleSlideChange}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <img
                className={`w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full mx-auto mb-10 drop-shadow-xl ${
                  index === activeIndex ? "active" : ""
                }`}
                src={member.image}
                alt={member.name}
                onClick={() => setActiveIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="team-container">
        <div
          key={activeIndex}
          className={`mb-10 max-w-[300px] md:max-w-[600px] mx-auto rounded-lg p-6 bg-[#64efae] text-center active`}
        >
          <h2 className="text-white text-[30px] font-bold mb-2">{activeMember.name}</h2>
          <p className="text-white text-[22px] mb-4">{activeMember.jobTitle}</p>
          <p className="text-[#ffffff]">{activeMember.bio}</p>
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
              fill="#57eebc"
              fillOpacity="0.4"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="#57eebc"
              fillOpacity="0.4"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="#57eebc"
              fillOpacity="0.4"
            />
            <use 
            xlinkHref="#gentle-wave" 
            x="48" 
            y="7" 
            fill="#57eebc" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TeamSection;