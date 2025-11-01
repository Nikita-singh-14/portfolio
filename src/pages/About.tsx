
import { FaAngleRight } from "react-icons/fa6";
const About = ({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10 '>
        <div >
            <b className='text-2xl'>About</b>
            <div className='h-[0.4rem] bg-blue-500 w-[6.3rem] rounded-2xl '></div>
        </div>
        <div className='flex flex-col flex-1 md:flex-row gap-8 '>
            <div className='flex flex-col gap-5'>
                <ul className='flex flex-col gap-5 '>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500'/><b>Degree:  </b> Bachelor of Technology</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500' /><b>Institute: </b>Guru Ghasidas Vishwavidyalaya, bilaspur, C.G., India</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500' /><b>City: </b>Bilaspur, Chhatisgarh</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500'/><b>Intership: </b>Open to Winter 2025 interships</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500'/><b>Email: </b>nk2371174@gmail.com</li>
                </ul>
                <div className='flex flex-col gap-2 tech'>
                    <b>Tech Stack:</b>
                    <div>
                        <p className='text-sm'>Web Dvelopment:</p>
                        <div className='flex gap-3 text-xs'>
                            <div className='box'>React</div>
                            <div className='box'>TypeScript</div>
                            <div className='box'>Nodejs</div>
                            <div className='box'>Expressjs</div>
                            <div className='box'>MongoDB</div>
                        </div>
                    </div>
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

export default About