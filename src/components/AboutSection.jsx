import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutPic from "./../assets/AboutPic.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gOne from "./../assets/GalleryImgOne.jpg";
import gTwo from "./../assets/GalleryImgTwo.jpg";
import gThree from "./../assets/GalleryImgThree.jpg";
import gFour from "./../assets/GalleryImgFour.jpg";
import gFive from "./../assets/GalleryImgFive.jpg";
import gSix from "./../assets/GalleryImgSix.jpg";
import gSeven from "./../assets/GalleryImgSeven.jpg";
import gEight from "./../assets/GalleryImgEight.jpg";

import VideoSection from "./../components/VideoSection";
import FocusSection from "./../components/FocusSection";
import ReviewsSection from './../components/ReviewsPartnersSection';

import "../index.css";

SwiperCore.use([Navigation, Pagination]);

const AboutSection = () => {
  return (
    <div id="about-section" className="relative">
      <div className="text-center mx-10 relative z-10">
        <h1 className="text-3xl font-bold my-10">What We Do</h1>
        {/* Head Content */}
        <div className="max-w-[800px] mx-auto">
          <p className="mb-10">
            At TechPro, we are passionate about delivering digital solutions
            that empower businesses to establish and enhance their digital
            presence. Our mission is to partner with clients who are seeking to
            start or improve their digital presence and provide them with
            innovative and effective solutions tailored to their unique needs.
          </p>
          <p className="mb-10">
            We understand the ever-evolving digital landscape and the importance
            of leveraging technology to drive growth and success. With a team of
            skilled professionals and a customer-centric approach, we are
            committed to delivering exceptional results that exceed our clients'
            expectations.
          </p>
        </div>

        {/* Background Blur A */}
        <div className="bg-[#9affcd] blur-3xl -z-10 -left-[100px] w-[400px] h-[400px] border-4 rounded-full absolute"></div>
        
        <VideoSection videoSrc={AboutPic} />         
        
        <div className="bg-[#9affcd] blur-3xl -z-10 bottom-[200px] -right-[100px] w-[400px] h-[400px] border-4 rounded-full absolute"></div>
        
        <FocusSection />

        {/* Swiper Slide */}
        <div className="max-w-[800px] mx-auto mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            customclass="custom-swiper"
          >
            <SwiperSlide className="p-2">
              <img src={gOne} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gTwo} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gThree} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gFour} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gFive} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gSix} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gSeven} alt="gallery" className="swiper-image" />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <img src={gEight} alt="gallery" className="swiper-image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ReviewsSection />
    </div>
  );
};

export default AboutSection;
