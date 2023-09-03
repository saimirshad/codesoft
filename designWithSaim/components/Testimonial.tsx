import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import { profileImg } from "../public/assets";
import Image from "next/image";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },

    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #F7D449",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="text-white py-20 flex justify-center items-center"
    >
      <div className="w-[350px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-base font-bodyFont text-textDark text-center leading-8">
                <span className="text-textGreen">James Hilner -</span> Thanks to Saim, my online business is thriving. He created a beautiful website that perfectly captured my brand and integrated e-commerce functionality that allowed me to start selling products right away. I can't thank Him enough for making my dreams a reality
                
              </p>  
              
            </div>
            <div>
              <p className="text-base text-textDark text-center leading-8">
                <span className="text-textGreen">Michael Aiden -</span> My experience with the UI/UX service was excellent. You improved the user experience of website through a seamless process and receptive attitude towards feedback. I highly recommend your services to anyone looking to enhance website's usability and design.
              </p>
            </div>
            <div>
              <p className="text-base text-textDark text-center leading-8">
                <span className="text-textGreen">Mathew Wade -</span> Thanks to you saim, my online business is thriving. you created a beautiful website that perfectly captured my brand and integrated e-commerce functionality that allowed me to start selling products right away. I can't thank enough for making my dreams a reality.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
