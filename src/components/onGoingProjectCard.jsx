import React from 'react';

const OnGoingProjectCard = ({width, title, desc}) => {

    // const width = props.width

    return (
         <div className='flex flex-col bg-gunmetal/30 backdrop-blur-2xl hover:-rotate-2 rounded-2xl p-4 m-4 border-r border-b border-black shadow-[8px_8px_0px_#000]'>
                <div className='flex flex-col w-[80%]'>
                    <div>
                        <p
                            className='text-2xl font-bold text-crayol'
                        >{title}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                       <div className='w-[100px] h-[10px] rounded-2xl bg-gunmetal/40'>
                            <p
                                className='h-full rounded-2xl bg-crayol'
                                style={{ width: `${width}%` }}
                            />

                        </div>
                        <p className='text-crayol'>{width}%</p>
                    </div>
                </div>

                <p className='mt-4 font-thin'>
                        {desc}
                </p>
            </div>
    );
}

export default OnGoingProjectCard;
