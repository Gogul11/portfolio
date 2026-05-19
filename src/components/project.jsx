import React from 'react';
import { LuExternalLink } from "react-icons/lu";
import { GiAnchor } from "react-icons/gi";


const Project = (props) => {
    return (
        <div
            className='bg-white/10 backdrop-blur-2xl drop-shadow-xl drop-shadow-white/10 w-[90%] rounded-2xl p-4 flex flex-col justify-center items-center lg:w-[60%] md:w-[70%]  md:p-6 ani'
        >
            {/* content */}
            <div className='flex flex-col'>
                <p className='text-2xl text-indigo-200 underline font-semibold m-2'>{props.title}</p>
                <div className='flex items-center text-blue-600 hover:cursor-pointer w-fit'>
                    <LuExternalLink />
                    <a
                        href={props.repolink}
                        target='_blank'
                        className='m-2 text-blue-600'
                    >Repo link</a>
                </div>
                {props.liveurl &&
                    <div className='flex items-center w-fit text-blue-600 hover:cursor-pointer'>
                        <GiAnchor />
                        <a
                        href={props.liveurl}
                        target='_blank'
                        className='m-2 text-blue-600'
                        >Visit</a>
                    </div>
                }
               <div
                    className="text-md font-light m-2"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />

            </div>
        </div>
    );
}

export default Project;
