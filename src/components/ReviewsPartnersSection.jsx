import React from "react";
import ReviewOne from "./../assets/Review1.jpg";
import ReviewTwo from "./../assets/Review2.jpg";
import ReviewThree from "./../assets/Review3.jpg";
import At from "./../assets/atlassian.png";
import Google from './../assets/google.png';
import Dropbox from './../assets/dropbox.png';
import Slack from './../assets/slack.png';
import Shopify from './../assets/shopify.png'

const ReviewsPartnersSection = () => {
  return (
    <div>
      <h1 className="text-center my-12 text-[40px] font-bold relative z-10">
        Reviews
      </h1>
      <div className="reviews-container flex flex-col md:flex-row">
        <div className="border-4 mb-5 rounded-xl bg-[#48dfaa] relative overflow-hidden w-[300px]">
          <img
            className="opacity-80 rounded-full border-2 drop-shadow-lg w-[100px] absolute -left-5 -top-5 z-0"
            src={ReviewOne}
            alt=""
          />
          <h2 className="text-white text-right mt-2 mr-5 text-[30px] relative z-10">
            -Geoff Bezohs
          </h2>
          <p className="text-[12px] px-5 pb-5 text-left text-white relative z-10">
            "I'm extremely satisfied with the digital solutions provided by
            TechPro. They helped us establish a strong online presence and
            tailored their services to meet our unique needs. Their team of
            professionals delivered exceptional results, exceeding our
            expectations. Highly recommended!"
          </p>
        </div>
        <div className="border-4 mb-5 md:mx-2 rounded-xl bg-[#48dfaa] relative overflow-hidden w-[300px]">
          <img
            className="opacity-80 rounded-full border-2 drop-shadow-lg w-[100px] absolute -left-5 -top-5 z-0"
            src={ReviewTwo}
            alt=""
          />
          <h2 className="text-white text-right mt-2 mr-5 text-[30px] relative z-10">
            -Sarah Prague
          </h2>
          <p className="text-[12px] px-5 pb-5 text-left text-white relative z-10">
            "TechPro has been instrumental in improving our digital presence.
            Their innovative solutions and customer-centric approach have helped
            us drive growth and success in the competitive market. Their
            expertise and dedication make them a trusted partner for any
            business seeking digital transformation."
          </p>
        </div>
        <div className="border-4 mb-10 rounded-xl bg-[#48dfaa] relative overflow-hidden w-[300px] md:mt-4">
          <img
            className="opacity-80 rounded-full border-2 drop-shadow-lg w-[100px] absolute -left-5 -top-5 z-0"
            src={ReviewThree}
            alt=""
          />
          <h2 className="text-white text-right mt-2 mr-5 text-[30px] relative z-10">
            -Michael Gordan
          </h2>
          <p className="text-[12px] px-5 pb-5 text-left text-white relative z-10">
            "I can't say enough good things about TechPro's services. They have
            a deep understanding of the evolving digital landscape and provided
            us with effective strategies to stay ahead. Their team's skills and
            knowledge are impressive, always go above and beyond to
            ensure our satisfaction. Truly top-notch!"
          </p>
        </div>
      </div>
      <h2 className="text-center text-[20px] font-bold mb-5">Our Partners</h2>
      <div className="opacity-50 partners-container flex flex-wrap mx-10">
        <img className="my-2 mx-2" src={At} alt="" />
        <img className="my-2 mx-2" src={Google} alt="" />
        <img className="my-2 mx-2" src={Dropbox} alt="" />
        <img className="my-2 mx-2" src={Slack} alt="" />
        <img className="my-2 mx-2" src={Shopify} alt="" />       
      </div>
    </div>
  );
};

export default ReviewsPartnersSection;
