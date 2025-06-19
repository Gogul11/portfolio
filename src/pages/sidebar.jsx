import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import getFields from '../utils/fields';
import getProjectFields from '../utils/projectFields'
import SideBarFields from '../components/sideBarField';

const Sidebar = ({setCurrentPage}) => {

    const[projects, setProjects] = useState(false)
    const[showProjects, setShowProjects] = useState(false)


    const sideBarContentStyles = 'flex w-[100%] focus:bg-white/20 hover:bg-white/10 cursor-pointer p-2'
    const projectStyles = 'flex w-[100%] pl-8 focus:bg-white/20 py-2 hover:bg-white/10 cursor-pointer'

    const fields = getFields(setCurrentPage)
    const projectFields = getProjectFields(setCurrentPage)

    return (
        <div 
            className='bg-gray-900/50 w-[70%] md:h-[95vh] flex flex-col py-4 md:w-[250px] lg:w-[350px]
                        rounded-[20px] ml-4 border-1 border-gray-600 ani max-md:overflow-auto max-md:max-h-[500px] scrollbar-none'>

            
            {fields.map((item, index) => (
                <SideBarFields
                    key={index} 
                    className={sideBarContentStyles}
                    onClickFunc={item.func}
                    icon={item.icon}
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
                    <div className={`max-h-[300px] overflow-auto ${showProjects ? 'ani' : 'ani-out'}`}>                        <ul className='text-white flex flex-col gap-2 '>
                            {projectFields.map((item, index) => (
                                <li key={index}>
                                    <button className={projectStyles} onClick={item.func}>
                                        {item.icon}
                                        <p className='ml-2 text-left'>{item.title}</p>
                                    </button>
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