
const Skills = () => {
    return (
        <div className='about flex flex-col gap-10 h-full'>
            {/* Section Title */}
            <div>
                <b className='text-2xl'>Skills</b>
                <div className='h-[0.4rem] bg-blue-500 w-[5rem] rounded-2xl'></div>
            </div>

            {/* Content: Bio and Skills List */}
            <div className='flex flex-col flex-1 md:flex-row gap-8 '>
                
                <div className='flex flex-wrap gap-16'>
                    <div className='flex flex-col gap-2'>
                        
                        {/* Example Skill Item */}
                        <div className='text-lg font-semibold'>Java</div>
                        <div className='w-50% bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div>
                        </div>

                        <div className='text-lg font-semibold'>JavaScript</div>
                        <div className='w-[30rem] bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>

                        <div className='text-lg font-semibold mt-4'>React</div>
                        <div className='w-[30rem] bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[80%]'></div> {/* Example progress */}
                        </div>
                         <div className='text-lg font-semibold'>TypeScript</div>
                        <div className='w-[30rem] bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>
                         

                    </div>
                    <div className='flex flex-col gap-2'>

                    <div className='text-lg font-semibold'>Node.js</div>
                        <div className='w-[30rem] bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>
                         <div className='text-lg font-semibold'>Express.js</div>
                        <div className='w-[30rem] bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>
                        <div className='text-lg font-semibold mt-4'>Database (SQL, MongoDB)</div>
                        <div className='w-[30rem] bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[75%]'></div> {/* Example progress */}
                        </div>
                        </div>
                </div>

            </div>
        </div>
    ) 
}

export default Skills;