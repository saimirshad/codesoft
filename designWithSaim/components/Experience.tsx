import React, { useState } from "react";
import Section from "./Section";
import Panaverse from "./works/Panaverse";
import Edtech from "./works/Edtech";
import Company5 from "./works/Company5";
import Company4 from "./works/Company4";
import Company3 from "./works/Company3";
import { motion } from "framer-motion";

const Experience = () => {
  const [workPanaverse, setWorkPanaverse] = useState(true);
  const [workEdtech, setWorkEdtech] = useState(false);
  const [workCompany3, setWorkcompany3] = useState(false);
  const [workCompany4, setWorkcompany4] = useState(false);
  const [workCompany5, setWorkcompany5] = useState(false);

  const handlePanaverse = () => {
    setWorkPanaverse(true);
    setWorkEdtech(false);
    setWorkcompany3(false);
    setWorkcompany4(false);
    setWorkcompany5(false);
  };
  const handleEdtech = () => {
    setWorkPanaverse(false);
    setWorkEdtech(true);
    setWorkcompany3(false);
    setWorkcompany4(false);
    setWorkcompany5(false);
  };
  const handlecompany3 = () => {
    setWorkPanaverse(false);
    setWorkEdtech(false);
    setWorkcompany3(true);
    setWorkcompany4(false);
    setWorkcompany5(false);
  };
  const handlecompany4 = () => {
    setWorkPanaverse(false);
    setWorkEdtech(false);
    setWorkcompany3(false);
    setWorkcompany4(true);
    setWorkcompany5(false);
  };
  const handlecompany5 = () => {
    setWorkPanaverse(false);
    setWorkEdtech(false);
    setWorkcompany3(false);
    setWorkcompany4(false);
    setWorkcompany5(true);
  };
  return (
    <section
      id="Experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <Section title="Where I have Worked" titleNo="02" />
      <motion.div initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }} className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handlePanaverse}
            className={`${
              workPanaverse
                ? " border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Panaverse
          </li>
          {/* <li
            onClick={handleEdtech}
            className={`${
              workEdtech
                ? " border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            EdTech
          </li>
          <li
            onClick={handlecompany3}
            className={`${
              workCompany3
                ? " border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            company3
          </li>
          <li
            onClick={handlecompany4}
            className={`${
              workCompany4
                ? " border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            company4
          </li>
          <li
            onClick={handlecompany5}
            className={`${
              workCompany5
                ? " border-l-textGreen text-textGreen"
                : " border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            company5
          </li> */}
        </ul>
        {workPanaverse && <Panaverse />}
        {/* {workEdtech && <Edtech />}
        {workCompany3 && <Company3 />}
        {workCompany4 && <Company4 />}
        {workCompany5 && <Company5 />} */}
      </motion.div>
    </section>
  );
};

export default Experience;
