import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AboutMe = () => {
  return (
    <>
      <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
        <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
         ABOUT ME
        </span>
        <div className="h-[3px] flex-1 bg-crayol" />
      </div>

      <div className=" w-full flex flex-col items-center justify-center px-4 py-10">
    
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
        
        {/* Image */}
        <div className="flex shrink-0 justify-center md:w-[35%]">
          <div className="relative w-fit rotate-2 border-2 border-black bg-crayol p-2 shadow-[8px_8px_0px_#000] hover:-rotate-2">
            <img src="/portfolio/me.png" alt="Gogul" className="w-52 md:w-72" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center">
            <p className="text-2xl text-white lg:text-4xl">
              <span className="hi">👋</span> Hi I am{" "}
              <span className="font-heading text-crayol">Gogul</span>,
            </p>

            <p className="blink ml-1 text-3xl text-white">|</p>
          </div>

          <div className="mt-6">
            <p className="text-lg text-white md:text-xl">
              {" "}
              I'm a passionate and curious{" "}
              <a
                href="https://www.auegov.ac.in/Department/ist"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-crayol"
              >
                {" "}
                B.Tech Information Technology{" "}
              </a>{" "}
              student at the{" "}
              <a
                href="https://ceg.annauniv.edu/dept.html"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-crayol"
              >
                {" "}
                College of Engineering, Guindy{" "}
              </a>{" "}
              (2023-2027), with a strong interest in system-level development,
              full-stack web technologies and AI technologies.{" "}
            </p>{" "}
            <p className="mt-6 text-lg text-white md:text-xl">
              {" "}
              My journey so far includes hands-on academic projects, club
              contributions, and internships that helped me sharpen my technical
              abilities while learning how to work effectively in teams.{" "}
            </p>{" "}
            <p className="mt-6 text-lg text-white md:text-xl">
              {" "}
              I'm driven by a desire to learn continuously, collaborate
              meaningfully, and build impactful software.{" "}
            </p>{" "}
            <p className="mt-8 text-center text-lg text-crayol md:text-xl">
              {" "}
              Get to know more about me!{" "}
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutMe;
