import React from 'react';
import { LuExternalLink } from "react-icons/lu";
import { GiAnchor } from "react-icons/gi";


const Project = (props) => {
    return (
        <div
            className='bg-gunmetal/30 backdrop-blur-2xl  border-r border-b border-black shadow-[8px_8px_0px_#000] w-[90%] rounded-2xl p-4 flex flex-col justify-center items-center lg:w-[60%] md:w-[70%]  md:p-6 ani'
        >
            {/* content */}
            <div className='flex flex-col ite'>
                <div className="mb-8 flex items-center gap-3 px-4 md:px-10">
                  <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
                    {props.title}
                  </span>
                </div>
                <div className='flex items-center text-crayol hover:cursor-pointer w-fit'>
                    <LuExternalLink />
                    <a
                        href={props.repolink}
                        target='_blank'
                        className='m-2 text-crayol'
                    >Repo link</a>
                </div>
                {props.liveurl &&
                    <div className='flex items-center w-fit text-crayol hover:cursor-pointer'>
                        <GiAnchor />
                        <a
                        href={props.liveurl}
                        target='_blank'
                        className='m-2 text-crayol'
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
