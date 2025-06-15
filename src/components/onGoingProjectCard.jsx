import React from 'react';

const OnGoingProjectCard = ({width, title, desc}) => {

    // const width = props.width

    return (
         <div className='flex flex-col bg-white/10 rounded-2xl p-4 m-4'>
                <div className='flex flex-col w-[80%]'>
                    <div>
                        <p
                            className='text-2xl font-bold'
                        >{title}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                       <div className='w-[100px] h-[10px] rounded-2xl bg-gray-400/30'>
                            <p
                                className={`h-full rounded-2xl ${
                                width <= 25
                                    ? 'bg-red-400'
                                    : width <= 50
                                    ? 'bg-orange-400'
                                    : width <= 75
                                    ? 'bg-yellow-400'
                                    : width <= 90
                                    ? 'bg-blue-400'
                                    : 'bg-green-400'
                                }`}                            
                                style={{ width: `${width}%` }}
                            />

                        </div>
                        <p className={`${
                                width <= 25
                                    ? 'text-red-400'
                                    : width <= 50
                                    ? 'text-orange-400'
                                    : width <= 75
                                    ? 'text-yellow-400'
                                    : width <= 90
                                    ? 'text-blue-400'
                                    : 'text-green-400'
                                }`}>{width}%</p>
                    </div>
                </div>

                <p className='mt-4 font-thin'>
                        {desc}
                </p>
            </div>
    );
}

export default OnGoingProjectCard;
