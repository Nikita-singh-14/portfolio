import { useState } from 'react'
// Import all icons here...

import { CiHome, CiPhone } from "react-icons/ci";
import { FaTasks } from "react-icons/fa"; 
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { GrUserExpert, GrCertificate } from "react-icons/gr";
import { RiImportFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
import { IoReorderThree, IoClose } from "react-icons/io5";

const Sidebar = ({ sections, activeSection, onLinkClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); //check ye rahna chahiye ya nhi
    };

    const navItems = [
        { id: "home", title: "Home", icon: CiHome },
        { id: 'about', title: 'About', icon: RxAvatar },
        { id: 'skills',  title: 'Skills', icon: FaTasks },
        { id: 'experience', title: 'Experience' , icon: GrUserExpert },
        { id: 'portfolio', title: 'Portfolio', icon: RiImportFill },
        { id: 'certifications',  title: 'Certifications', icon: GrCertificate },
        { id: 'resume', title: 'Resume',  icon: MdOutlineEventNote },
        { id: 'contact', title: 'Contact',  icon: CiPhone },
    ];
     const handleLinkClick = (id) => {
      onLinkClick(id); 
      setIsMenuOpen(false); 
  };

    return (
       
        <div className='side'> 
         
            <div className='absolute top-4 right-4 z-50'>
                {isMenuOpen ? (
                    <IoClose
                        className="lg:hidden text-5xl cursor-pointer text-gray-900 hover:text-blue-600"
                        onClick={toggleMenu}
                    />
                ) : (
                    <IoReorderThree
                        className="lg:hidden text-5xl cursor-pointer text-gray-900 hover:text-blue-600"
                        onClick={toggleMenu}
                    />
                )}
            </div>
            <div
                className={`
                    flex-col gap-8 bg-gray-900 text-gray-400 w-[20rem] h-screen fixed top-0 left-0 z-40 p-6 
                    transition-transform duration-300 ease-in-out
                    
                    ${isMenuOpen ? 'translate-x-0 flex' : '-translate-x-full lg:translate-x-0 lg:flex'}
                `}
            >
                {/* Profile Section */}
                <div className='flex flex-col items-center gap-2 mt-4 sidebar'>
                    <img className='w-[11rem] h-[11rem] rounded-full border-4 border-gray-600' src="profile.jpg" alt="Profile" />
                    <h3 className='text-white text-3xl'>Nikita Singh</h3>
                    <div className='flex gap-4 text-white text-2xl'>
                        <a href="https://www.linkedin.com/in/nikita-singh-3560652bb/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:text-blue-400' /></a>
                        <a href="https://github.com/Nikita-singh-14" target="_blank" rel="noopener noreferrer"><FaGithub className='hover:text-blue-400' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaXTwitter className='hover:text-blue-400' /></a>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className='flex flex-col gap-5 mt-8 text-xl flex-grow overflow-y-auto'>
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                    <a  
                        key={item.id}
                        href={`#${item.id}`} // Single-page anchor link
                        className={`
                            flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-colors duration-200 
                            ${isActive 
                                ? 'text-white bg-indigo-600 shadow-lg font-semibold' 
                                : 'hover:text-blue-400'
                            }
                        `}
                        onClick={() => handleLinkClick(item.id)} 
                    >   
                        <Icon className='text-2xl'  />
                        <span>{item.title}</span>
                    </a>
                )
            })}
        </ul>

       


                
            </div>

          
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
                    onClick={toggleMenu}
                />
            )}
        </div>
    )
}

export default Sidebar