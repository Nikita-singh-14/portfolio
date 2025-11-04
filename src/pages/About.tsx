import { FaAngleRight } from "react-icons/fa6";
interface AboutProps{
  id: string; // or whatever type 'id' should be
}
const About: React.FC<AboutProps> =({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10 '>
        <div >
            <b className='text-2xl'>About</b>
            <div className='h-1 bg-blue-500 w-[6.3rem] rounded-2xl mt-1'></div>
        </div>
        <div className='flex flex-col flex-1 md:flex-row gap-8 '>
            <div className='flex flex-col gap-5'>
                <ul className='flex flex-col gap-5'>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500'/><b>Degree:  </b> Bachelor of Technology</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500' /><b>Institute: </b>Guru Ghasidas Vishwavidyalaya, bilaspur, C.G., India</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500' /><b>City: </b>Bilaspur, Chhatisgarh</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500'/><b>Intership: </b>Open to Winter 2025 interships</li>
                    <li className='flex items-center gap-2'><FaAngleRight className='text-blue-500'/><b>Email: </b>nk2371174@gmail.com</li>
                </ul>
                <div className='flex flex-col gap-2 tech'>
                    <b>Tech Stack:</b>
                    <div >
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
                <p className="para">Pre-Final year B.Tech student at Central University Bilaspur specializing in Information Technology.I'm driven by a passion
                     for building and creating.
                </p>
                <p className="para">My core focus is Web Development—I love the practical challenge of being a MERN Stack developer
                      and creating intelligent APIs. I've also built a solid foundation in Java, which has significantly sharpened my 
                      problem-solving abilities, leading me to successfully conquer over 80 LeetCode problems. What sets me apart is how I 
                      blend technical skill with creativity; outside of coding, I freelance to design visually striking posters for Yajuka. 
                      For the past year, I've been an active member of my college's technical club, contributing as part of the Web Developer Team. 
                      I constantly seek out high-pressure, innovative environments, which is why I regularly participate in major hackathons
                    like SIH. To stay ahead of the curve, I'm currently expanding my knowledge into the future of tech by taking Machine 
                    Learning courses via NPTEL. I genuinely enjoy combining my technical expertise with my design sensibilities to bring 
                    ideas to life.
                </p>
            </div>
        </div>

    </div>
  )
}

export default About