import React from "react";
import Section from "../Section";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

import { amazonImg, cyberImg, noorShop, profileImg } from "../../public/assets";


const Sada = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <Section title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* project1 */}
        <div className="m-10 flex flex-col lgl:flex-row gap-6">
          <a
            className="w-[100%] object-right lgl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="float-right rounded-md w-full h-full object-contain  scale-105 group-hover:scale-100 duration-500"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-bodyColor/10 rounded-lg top-0 scale-105 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full lgl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right lgl:-ml-16 z-10">
            <div className="scale-100 hover:scale-105 duration-500">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold ">Avo</h3>
            </div>
            <p className="text-sm md:text-base bg-textCards p-2 md:p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
              A Design Agency website.
              Having 5 pages, Working Contact Form, Elegant Modern Looking Design with Animations
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              {/* <li>Next-auth</li> */}
              {/* <li>Stripe</li> */}
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              {/* <a
                href="https://github.com/Saim-Irshad"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saim-irshad-83401b252/"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <SlSocialLinkedin />
              </a> */}
              {/* <a
                href="https://github.com/Saim-Irshad"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        
        {/* project2 */}
        <div className="m-10 flex flex-col lgl:flex-row-reverse gap-6">
          <a
            className="w-full lgl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="float-right rounded-md w-full h-full object-contain  scale-105 group-hover:scale-100 duration-500"
                src={profileImg}
                alt="profileImg"
              />
              <div className="absolute w-full h-full bg-bodyColor/10 rounded-lg scale-105 top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full lgl:w-1/2 flex flex-col gap-6 justify-between items-end text-right lgl:-ml-16 z-10">
            <div className="scale-100 hover:scale-105 duration-500">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">DigiTek</h3>
            </div>
            <p className="text-sm md:text-base bg-textCards p-2 md:p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 ">
              A Saas company website. Having 7 pages, Working Contact Form, Elegant Modern Looking Design with Animations
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              {/* <a
                href="https://github.com/Saim-Irshad"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saim-irshad-83401b252/"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <SlSocialLinkedin />
              </a> */}
              {/* <a
                href="https://github.com/Saim-Irshad"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        {/* project3 */}
        <div className="m-10 flex flex-col lgl:flex-row gap-6">
          <a
            className="w-full lgl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="float-right rounded-md w-full h-full object-contain  scale-105 group-hover:scale-100 duration-500"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-bodyColor/10 rounded-lg top-0 scale-105 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full lgl:w-1/2 flex flex-col gap-6 justify-between items-end text-right lgl:-ml-16 z-10">
            <div className="scale-100 hover:scale-105 duration-500">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold scale-100">Portfolio Design</h3>
            </div>
            <p className="text-sm md:text-base bg-textCards p-2 md:p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
              Simple Classic Resume like Portfolio Website Figma Design. 5 pages Navigation Prototypes with Dark mode Theme as well
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Figma</li>
              <li>Dark Mode</li>
              {/* <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li> */}
            </ul>
            <div className="text-2xl flex gap-4">
              {/* <a
                href="https://github.com/Saim-Irshad"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saim-irshad-83401b252/"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <SlSocialLinkedin />
              </a> */}
              {/* <a
                href="https://github.com/Saim-Irshad"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Sada;
