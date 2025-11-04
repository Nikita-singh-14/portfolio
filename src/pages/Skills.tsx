interface SkillProps{
  id: string; // or whatever type 'id' should be
}

const Skills : React.FC<SkillProps>= ({ id }) => {
    return (
        <div id={id} className='about flex flex-col gap-10 bg-gray-100'>
            {/* Section Title */}
            <div>
                <b className='text-2xl'>Skills</b>
                <div className='h-1 bg-blue-500 w-[5rem] rounded-2xl mt-1'></div>
            </div>

            {/* Content: Bio and Skills List */}
            <div className='flex flex-col  w-full md:flex-row gap-8 '>
                
                <div className='flex flex-wrap gap-16 w-full'>
                    <div className='w-[48%] flex flex-col gap-2'>
                        
                        {/* Example Skill Item */}
                        <div className='text-lg font-semibold'>Java</div>
                        <div className=' bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div>
                        </div>

                        <div className='text-lg font-semibold'>JavaScript</div>
                        <div className='bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>

                        <div className='text-lg font-semibold mt-4'>React</div>
                        <div className=' bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[80%]'></div> {/* Example progress */}
                        </div>
                         <div className='text-lg font-semibold'>TypeScript</div>
                        <div className='bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>
                         

                    </div>
                    <div className='flex flex-col gap-2 w-[48%]'>

                        <div className='text-lg font-semibold'>Node.js</div>
                        <div className='bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>
                        <div className='text-lg font-semibold'>Express.js</div>
                        <div className='bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[90%]'></div> {/* Example progress */}
                        </div>
                        <div className='text-lg font-semibold mt-4'>Database (SQL, MongoDB)</div>
                        <div className='bg-gray-200 rounded-full h-2.5'>
                            <div className='bg-blue-400 h-2.5 rounded-full w-[75%]'></div> {/* Example progress */}
                        </div>
                        </div>
                </div>

            </div>
        </div>
    ) 
}

export default Skills;