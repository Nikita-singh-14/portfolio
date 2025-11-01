interface ResumeProps{
  id: string; // or whatever type 'id' should be
}

const Resume : React.FC<ResumeProps>= ({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10 w-full'>
            <div >
                <b className='text-2xl'>Resume</b>
                <div className='h-[0.3rem] bg-blue-500 w-[8rem] rounded-2xl '></div>
            </div>
            <div className='flex flex-col flex-1 md:flex-row justify-between'>
                <div>
                    
                    <div className='flex flex-col gap-2'>
                        <b>Tech Stack:</b>
                       
                        <div>
                            <p className='text-sm'>Programming Langauges:</p>
                            <div className='flex gap-3 text-xs'>
                                <div className='box'>Java</div>
                                <div className='box'>JavaScript</div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm'>Tools:</p>
                            <div className='flex gap-3 text-xs'>
                                <div className='box'>Git</div>
                                <div className='box'>Github</div>
                                <div className='box'>VS Code</div>
                                <div className='box'>Postman</div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm'>Graphics Design:</p>
                            <div className='flex gap-3 text-xs'>
                                <div className='box'>Canva</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-xs flex flex-col gap-3 w-1/2'>
                    <p>Pre-Final year B.Tech student at Central University Bilaspur specializing in Information Technology. Proficient in Java and Web development, 
                    </p>
                    <p>Beyond technical expertise, I'm driven by impact and leadership. Served as Head Core Organizing Committee Member at TEDxBistupur Jamshedpur, 
                        managing multiple speakers and large-scale events. Founded the HASI Movement during COVID to provide free aid for hospital beds, now focused 
                        on delivering free stationery and education to underprivileged children. Whether building intelligent systems or leading meaningful initiatives, 
                        I combine technical problem-solving with strong communication and cross-functional team management to create solutions that make a difference.
                    </p>
                </div>
            </div>
    
        </div>
  )
}

export default Resume