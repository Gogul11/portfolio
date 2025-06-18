import React from 'react';

const Project = (props) => {
    return (
        <div
            className='bg-white/10 w-[90%] rounded-2xl p-4 flex flex-col justify-center items-center  md:p-6 ani'
        >
            {/* image */}
            <div>
                <img
                    className='rounded-2xl m-2 md:m-4 h-[250px] w-[250px] md:h-[300px] md:w-[400px]' 
                    src={props.path} 
                    alt={`${props.title} image`} />
            </div>

            {/* content */}
            <div className='flex flex-col'>
                <p className='text-2xl text-indigo-600 font-semibold m-2'>{props.title}</p>
                <a 
                    href={props.repolink}
                    target='_blank'
                    className='m-2 text-blue-600'
                >Repo link</a>
                {props.liveurl &&
                    <a 
                    href={props.liveurl}
                    target='_blank'
                    className='m-2 text-blue-600'
                    >Visit</a>
                }
                <p className='text-md font-light m-2'>{props.content}</p>
            </div>
        </div>
    );
}

export default Project;
