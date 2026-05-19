import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AboutMe = () => {
    return (
        <div className='md:p-8 flex flex-col h-full justify-center px-4 p-2 gap-4 rounded-2xl mx-3 md:mx-10 mb-4 md:mt-10 ani'>
            
            {/* Top */}
            <div className='flex gap-16 flex-wrap max-md:justify-center'>
                {/* //Image part */}
                {/* <div
                    className="relative group w-fit flex max-md:justify-center
                            rounded-full
                            drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                >
                    <img
                        className="rounded-full transition duration-300 cursor-pointer
                                group-hover:brightness-40"
                        src="/portfolio/me.jpeg"
                        alt="MyImage"
                    />
                    <div
                        className="absolute inset-0 rounded-full
                                flex items-center justify-center gap-4
                                opacity-0 group-hover:opacity-100
                                transition duration-300"
                    >
                        <a
                            href="https://linkedin.com/in/gogul11"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FaLinkedin size={32} color='#87ceeb'/>
                        </a>
                        <a
                            href="https://github.com/Gogul11"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FaGithub size={32} color='black'/>
                        </a>
                        <a
                            href="mailto:gogul0811@gmail.com"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <IoMdMail size={32} color='#ffff00'/>
                        </a>
                    </div>
                </div> */}

                {/* Thirukural */}
                {/* <div className='flex flex-col gap-2 justify-center items-center text-wrap
                                text-md lg:text-xl md:text-lg'>
                   <span className='tamil font-bold'>" வினைவலியும் தன்வலியும் மாற்றான் வலியும்</span>   
                   <span className='tamil font-bold'>துணைவலியும் தூக்கிச் செயல் ! "</span>
                </div> */}
            </div>

            {/* //Intro part */}
            <div className='flex mt-10'>
                <p 
                    className='text-white lg:text-4xl typeWriter text-3xl max-[350px]:text-2xl max-[300px]:text-lg'
                >
                    <span className='hi'>👋</span>Hi I am <span className='text-indigo-700'>Gogul</span>,
                </p>
                <p className='text-white text-3xl blink'>|</p>
            </div>

            {/* //Content */}
            <div className='md:w-[90%]'>
                <p className='text-white md:text-xl text-lg'><br />
                    I'm a passionate and curious <a 
                        href="https://www.auegov.ac.in/Department/ist" 
                        target='blank'
                        className='text-indigo-600 inline-block'
                    >B.Tech Information Technology
                    </a> student at the <a 
                        href="https://ceg.annauniv.edu/dept.html" 
                        target='blank'
                        className='text-indigo-600 inline-block'
                    >College of Engineering, Guindy</a>(2023-2027), 
                    with a strong interest in system-level development, full-stack web technologies and AI technologies.
                </p>

                <p className='text-white md:text-xl text-lg'>
                    <br /><br />
                   My journey so far includes hands-on academic projects, club contributions, 
                   and internships that helped me sharpen my technical abilities while learning how to work effectively in teams.
                </p>

                <p className='text-white md:text-xl text-lg'>
                    <br /><br />
                    I'm driven by a desire to learn continuously, collaborate meaningfully, and build impactful software.
                </p>

                <p
                    className='text-indigo-500 text-center md:text-xl text-lg'
                >
                    Get to know more about me !</p>
            </div>
            
        </div>
    );
}

export default AboutMe;
