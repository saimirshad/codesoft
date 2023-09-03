import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Panaverse = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer{" "}
        <span className="text-textGreen tracking-wide">@panaverse.co</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participated in Hackathon
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created Modern Looking E-commmerce Web App
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Sanity,
          React, NextJS, Figma, TailwindCss, and PostGresSQL
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with team of engineers, designers,
          producers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default Panaverse;
