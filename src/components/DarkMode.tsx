import {React, useState, useEffect } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const DarkMode = () => {
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark';
    };
    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        const initialTheme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, [isDarkMode]);

    const toggleTheme = (e) => {
        const checked = e.target.checked;
        setIsDarkMode(checked);
        const newTheme = checked ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

   

    return (
         <div className='flex items-center justify-center p-2'>
            {/* Hidden Checkbox */}
            <input
                className='sr-only' 
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme} 
                checked={isDarkMode}
            />
            <label 
                className={`flex items-center w-14 h-8 rounded-full transition-colors duration-300 relative p-1 cursor-pointer 
                            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} 
                htmlFor='darkmode-toggle'
            >
               
                <span 
                    className={`
                        w-6 h-6 rounded-full flex items-center justify-center absolute transition-transform duration-300 shadow-md
                        ${isDarkMode 
                            ? 'transform translate-x-[20px]  text-gray-800' 
                            : 'transform translate-x-0  text-black-600' 
                        }
                    `}
                >
                    
                    {isDarkMode ? (
                        <CiLight className='text-xl text-white' />
                    ) : (
                        
                        <MdDarkMode className='text-xl ' />
                    )}
                </span>
            </label>
        </div>
    )
}

export default DarkMode;
