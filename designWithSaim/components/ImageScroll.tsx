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
              <Image
                className=" rounded-lg h-full object-cover scale-105 group-hover:scale-100 duration-500"
                src={profileImg}
                alt="profileImg"
              />      
              
            </div>
            <div>
             
              <Image
                className=" rounded-lg h-full object-cover scale-105 group-hover:scale-100 duration-500"
                src={profileImg}
                alt="profileImg"
              />   
            </div>
            <div>
              <Image
                className=" rounded-lg h-full object-cover scale-105 group-hover:scale-100 duration-500"
                src={profileImg}
                alt="profileImg"
              />   
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
