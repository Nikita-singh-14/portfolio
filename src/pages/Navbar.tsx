import { IoReorderThree, IoClose} from "react-icons/io5";
import { useState } from 'react';
import DarkMode from '../components/DarkMode';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full fixed top-0 left-0 z-50 shadow-md bg-white">
            <div className="p-4 flex justify-evenly  items-center h-[5rem] sm:gap-0 gap-32">
                <div className=" w-[2rem] h-[2rem] border border-blue-600 rounded-2xl flex justify-center items-center" >
                    <h1 className="m-4 text-blue-500" >N</h1>
                </div>
                
                <div className="hidden sm:flex items-center gap-8 font-medium text-gray-700">
                    
                    <a className="hover:text-gray-900 transition duration-150" href="">About</a>
                    <a className="hover:text-gray-900 transition duration-150" href="">Project</a>
                    <a className="hover:text-gray-900 transition duration-150" href="">Experience</a>
                    <a className="hover:text-gray-900 transition duration-150" href="">Contact</a>
                </div>

            <div className="flex items-center gap-4 text-2xl text-gray-700">
                    <DarkMode/>
                     {isMenuOpen ? (
                     <IoClose 
                            className="sm:hidden text-3xl cursor-pointer hover:text-blue-800" 
                            onClick={toggleMenu} 
                        />
                    ) : (
                        <IoReorderThree 
                            className="sm:hidden text-3xl cursor-pointer hover:text-blue-800" 
                            onClick={toggleMenu}
                        />
                    )}
            </div>   
        </div>

        {isMenuOpen && (
                <div className={`sm:hidden w-full absolute bg-white shadow-lg transform transition-all duration-600 ease-in-out py-4 border-t border-blue-100  ${isMenuOpen ? 'translate-y-0 opacity-100 h-auto p-4' : '-translate-y-full opacity-0 h-0 p-0 overflow-hidden'}`}>
                    <div className="flex flex-col items-center gap-4 font-medium text-gray-700">
                     
                        <a 
                            className="hover:text-gray-900 transition duration-150 py-2 w-full text-center" 
                            href="" 
                            onClick={toggleMenu} 
                        > About
                        </a>
                        <a 
                            className="hover:text-gray-900 transition duration-150 py-2 w-full text-center" 
                            href="" 
                            onClick={toggleMenu}
                        >
                            Project
                        </a>
                        <a 
                            className="hover:text-gray-900 transition duration-150 py-2 w-full text-center" 
                            href="" 
                            onClick={toggleMenu}
                        >
                            Experience
                        </a>
                        <a 
                            className="hover:text-gray-900 transition duration-150 py-2 w-full text-center" 
                            href="" 
                            onClick={toggleMenu}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;