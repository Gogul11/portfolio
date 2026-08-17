import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import getFields from '../utils/fields';
import getProjectFields from '../utils/projectFields'
import SideBarFields from '../components/sideBarField';
import { Link } from 'react-router';

const Sidebar = ({setSide}) => {

    const[projects, setProjects] = useState(false)
    const[showProjects, setShowProjects] = useState(false)


    const sideBarContentStyles = 'flex w-[100%] focus:bg-white/20 hover:bg-white/10 cursor-pointer p-2'
    const projectStyles = 'flex w-[100%] pl-8 focus:bg-white/20 py-2 hover:bg-white/10 cursor-pointer'

    const fields = getFields()
    const projectFields = getProjectFields()

    return (
        <div 
            className='bg-gunmeta/10 backdrop-blur-lg w-[70%] md:h-[96vh] flex flex-col py-4 md:w-[250px] lg:w-[350px]
                        rounded-[10px] ml-4 ani max-md:overflow-auto max-md:max-h-[500px] scrollbar-none overflow-auto
                        border-r border-b border-black shadow-[8px_8px_0px_#000] rotate-1
                        '>

            
            {fields.map((item, index) => (
                <SideBarFields
                    key={index} 
                    className={sideBarContentStyles}
                    path={item.path}
                    icon={item.icon}
                    func={setSide}
                    content={item.title}
                />
            ))}
            
        
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
                    <div className={` ${showProjects ? 'ani' : 'ani-out'}`}>                        
                        <ul className='text-white flex flex-col gap-2 '>
                            {projectFields.map((item, index) => (
                                <li key={index}>
                                    <Link className={projectStyles} to={item.path} onClick={setSide}>
                                        {item.icon}
                                        <p className='ml-2 text-left'>{item.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>


        </div>
    );
}

export default Sidebar;