import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import Footer from '../components/works/Footer';
import emailjs from '@emailjs/browser';

const Contact2 = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [values,setValues] = useState({
    name : '',
    email: '',
    message: ''
  })
  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    
    
      
      emailjs.sendForm('service_c483uch', 'template_edteeyw', e.target as HTMLFormElement, '6bw58iZcuQoUt31Jv')
      .then((result) => {
          console.log(result.text);
          
          setSuccessMsg(
            `Hello ${values.name} your form has been submitted`
          )
          setValues({
            name: '',
            email: '',
            message: ''
          })
      }, (error) => {
          console.log(error.text);
      });
        
      
  };
const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <section
      id="contact"
      className="mt-8 max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
      "Let's turn your website vision into reality - fill out the contact form and let's create something amazing together!"
      </p>
      <p className="max-w-[600px] text-center text-textDark">
       Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      
      <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 w-[80%] md:w-[50%] h-full py-5">
        <div className="max-w-2xl h-full mx-auto flex flex-col gap-6 md:gap-12">

          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
              className="max-w-[600px] h-full text-center flex justify-center items-center mx-auto text-lg font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="w-full flex flex-col items-center gap-4 md:gap-10" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <input
                  onChange={onChange}
                  value={values.name}
                  className="bg-hoverColor  backdrop-blur-sm bg-opacity-30 rounded-md w-full md:w-1/2 py-2 px-4 text-base text-textDark placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200"
                  type="text"
                  required 
                  name="name"
                  placeholder="Name"
                />
                <input
                  value={values.email}
                  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  onChange={onChange}
                  className="bg-hoverColor backdrop-blur-sm bg-opacity-30 rounded-md w-full md:w-1/2 py-2 px-4 text-base text-textDark placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200"
                  type="text"
                  required
                  name="email"
                  placeholder="Email"
                />
              </div>
              <textarea
                onChange={onChange}
                value={values.message}
                placeholder="Message"
                required
                name="message"
                className=" bg-hoverColor backdrop-blur-sm bg-opacity-30 rounded-md w-full text-base h-36 p-4 text-textDark placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200 resize-none"
              ></textarea>
              {errMsg && (
                <p className="w-full bg-red-500 py-1 text-center text-base font-semibold tracking-wider bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
                  {errMsg}
                </p>
              )}
              <button
                type="submit"
                className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
              >
                Submit Now
              </button>
            </form>
          )}
            <a href="https://github.com/Saim-Irshad" target = "_blank"><p className="max-w-[600px] text-xs text-center text-textDark hover:text-textGreen">
        Designed and Developed by Saim Irshad 
      </p></a>
        </div>
      <Footer/>
      </div>
    </section>
  );
};

export default Contact2;
