import React, { useState } from 'react';
import { RiReactjsFill } from "react-icons/ri";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { PiHash } from "react-icons/pi";
import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { VscTerminalDebian } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { BsStack } from "react-icons/bs";

const Sidebar = ({setCurrentPage}) => {

    const[projects, setProjects] = useState(false)
    const[showProjects, setShowProjects] = useState(false)


    const sideBarContentStyles = 'flex w-[100%] focus:bg-white/20 hover:bg-white/10 cursor-pointer p-1'
    const projectStyles = 'flex w-[100%] pl-8 focus:bg-white/20 py-1 hover:bg-white/10 cursor-pointer'

    return (
        <div 
            className='bg-gray-900 w-[70%] md:h-[95vh] flex flex-col py-4 md:w-[250px] lg:w-[350px]
                        rounded-[20px] ml-4 border-1 border-white ani'>

            {/*Aboutme*/}
            <button
                className={sideBarContentStyles}
                onClick={() => setCurrentPage("aboutMe")}
            >
                <FaDocker 
                    color='#059df5'
                    size={30}
                />
                <p
                    className='ml-8 text-white'
                >aboutMe.docker</p>
            </button>
        
            {/*Projects*/}
            <button 
                onClick={() => {
                    setShowProjects(!showProjects)
                    setTimeout(() => setProjects(!projects), 500)
                }
                }
                 className={sideBarContentStyles}>
                {projects ? 
                    <MdOutlineKeyboardArrowDown 
                        size={30}
                        color='#85857e'
                    />
                :
                    <MdOutlineKeyboardArrowRight
                    size={30}
                    color='#85857e'
                    />
                }
                <p
                    className='ml-8 text-white'
                >Projects</p>
            </button>
            <div>
                {projects && 
                    <div className={showProjects ? 'ani' : 'ani-out'}>
                        <ul className='text-white flex flex-col gap-2 '>
                            <li>
                                <button className={projectStyles}>
                                    <VscTerminalDebian
                                        className='mt-1'
                                        size={18}
                                        color='red'
                                     />
                                    <p className='ml-2'>
                                        Exitor
                                    </p>
                                </button>
                            </li>
                            <li>
                                <button className={projectStyles}>
                                    <FaGitAlt
                                        className='mt-1'
                                        size={18}
                                        color='red'
                                     />
                                    <p className='ml-2'>
                                        Git simulator
                                    </p>
                                </button>
                            </li>
                            <li>
                                <button className={projectStyles}>
                                    <FaDatabase 
                                        className='mt-1'
                                        size={18}
                                        color='gray'
                                     />
                                    <p className='ml-2 text-left'>
                                        SpareParts Management System
                                    </p>
                                </button>
                            </li>
                            <li>
                                <button className={projectStyles}>
                                    <BsStack 
                                        className='mt-1'
                                        size={18}
                                        color='green'
                                     />
                                    <p className='ml-2 text-left'>
                                        SuperMarket Billing system
                                    </p>
                                </button>
                            </li>
                        </ul>
                    </div>
                }
            </div>

            {/*skills*/}
            <button
                className={sideBarContentStyles}
                onClick={() => setCurrentPage("skills")}
            >
                <PiHash 
                    color='#2997e6'
                    size={30}
                />
                <p
                    className='ml-8 text-white'
                >skills.css</p>
            </button>

            {/*Extra Curricular Activites*/}
             <button
                className={sideBarContentStyles}
                onClick={() => setCurrentPage("eca")}
            >
                <RiReactjsFill
                    color='#2997e6'
                    size={30}
                />
                <p
                    className='ml-8 text-white'
                >ECA.jsx</p>
            </button>

            {/*contact*/}
            <button
                className={sideBarContentStyles}
                onClick={() => setCurrentPage("contact")}
            >
                <PiBracketsCurlyLight
                    color='#f2f23a'
                    size={30}
                />
                <p
                    className='ml-8 text-white'
                >contact.json</p>
            </button>

            {/* resume */}
            <button
                className={sideBarContentStyles}
                onClick={() => setCurrentPage("resume")}
            >
                <FaFilePdf
                    color='red'
                    size={28}
                />
                <p
                    className='ml-8 text-white'
                >Resume.pdf</p>
            </button>
        </div>
    );
}

export default Sidebar;
