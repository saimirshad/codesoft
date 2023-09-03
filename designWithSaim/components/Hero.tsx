import React from "react";
import { motion } from "framer-motion";
import HorizontalTextEffect from "./works/HorizontalTextEffect";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont pt-10 tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-8xl font-titleFont font-semibold flex flex-col scale-100 hover:scale-105 duration-500"
      >
        Saim Irshad.{" "}
        <span className="text-textDark mt-2 lgl:mt-4  lgl:text-7xl">
          I build things for the web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-2-[650px] text-textDark font-medium"
      >
        {" "}
        Transforming digital visions into captivating experiences, as a versatile Web Developer and UI/UX Designer.     {" "}
        <a href="#contact" className="scroll-smooth">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Let's collaborate and bring your ideas to life!
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://www.linkedin.com/in/saim-irshad-a43a2a278/" target="_blank"><motion.button initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }} className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide bg-hoverColor hover:bg-textLight hover:text-bodyColor duration-300 font-semibold">Lets Connect</motion.button></a>




    </section>
  );
};

export default Hero;
