import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToCircle,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";


const FocusSection = () => {
  return (
    <div className="sm:flex justify-center mx-auto w-full md:max-w-[800px]">
          <div className="mb-10 md:mr-10 p-5 rounded-xl bg-gradient-to-r from-[#aeddd0] to-[#76d7cc] max-w-[320px] max-h-[290px] mx-auto flex flex-col justify-center">
            <div className="flex border-b-2 pb-3">
              <FontAwesomeIcon
                icon={faArrowsToCircle}
                style={{ color: "#ffffff" }}
                fontSize="30px"
              />
              <h2 className="text-[22px] text-white ml-10 font-bold">
                Our Focus
              </h2>
            </div>
            <p className="my-2 text-white">
              At TechPro, we offer a comprehensive range of digital solutions
              designed to enhance your brand, streamline operations, and drive
              meaningful growth. Our experienced team leverages cutting-edge
              technologies and strategic approaches to deliver customized
              solutions tailored to you.
            </p>
          </div>
          <div className="mb-10 md:mr-10 p-5 rounded-xl bg-gradient-to-r from-[#aeddd0] to-[#76d7cc] max-w-[320px] max-h-[290px] mx-auto flex flex-col justify-center">
            <div className="flex border-b-2 pb-3">
              <FontAwesomeIcon
                icon={faTruckFast}
                style={{ color: "#ffffff" }}
                fontSize="30px"
              />
              <h2 className="text-[22px] text-white ml-10 font-bold">
                Our Service
              </h2>
            </div>
            <p className="my-2 text-white">
              We specialize in helping businesses navigate the digital realm and
              harness its full potential. Whether you are a startup looking to
              establish your online presence or an established company seeking
              to revamp your digital strategy, we have the expertise and
              resources to guide you every step of the way.
            </p>
          </div>
        </div>
  )
}

export default FocusSection
