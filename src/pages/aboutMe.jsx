import React from 'react';

const AboutMe = () => {
    return (
        <div className='md:p-8 flex flex-col h-full justify-center px-4 p-2 gap-4 rounded-2xl mx-3 md:mx-10 mb-4 md:mt-10 ani'>
            
            {/* <div className='flex p-4 m-4'>
                
                <img
                    className='rounded-[50%] border-4 border-red-500 bg-transparent' 
                    src="/portfolio/me.jpeg" 
                    height={350} 
                    width={350} 
                    alt="MyImage" 
                />
            </div> */}
            {/* <div className='absolute inset-0 -z-10 bg-cover max-md:bg-center opacity-30 '
                style={{ backgroundImage: "url('/portfolio/me.jpeg')" }}>

            </div> */}

            <div className='flex'>
                <p 
                    className='text-white md:text-4xl typeWriter text-3xl max-[350px]:text-2xl max-[300px]:text-lg'
                >
                    <span className='hi'>👋</span>Hi I am <span className='text-indigo-700'>Gogul</span>,
                </p>
                <p className='text-white text-3xl blink'>|</p>
            </div>

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
                    with a strong interest in system-level development and full-stack web technologies. 
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
            </div>
            
        </div>
    );
}

export default AboutMe;
