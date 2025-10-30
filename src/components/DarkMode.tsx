import { useState, useEffect } from 'react';
import type { FC, SVGProps, ChangeEvent } from 'react'; // Added ChangeEvent type

// --- Inline SVG Icons (Replacing react-icons) ---
type IconProps = SVGProps<SVGSVGElement>;

const SunIcon: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

const MoonIcon: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);


const DarkMode: FC = () => {
    // Function to get the initial theme from localStorage or system preference
    const getInitialTheme = (): boolean => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme === 'dark';
        }
        // Fallback to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    
    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    // Apply the theme class to the document root element
    useEffect(() => {
        const root = document.documentElement;
        const newTheme = isDarkMode ? 'dark' : 'light';
        
        // Use Tailwind's 'dark' class for styling
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        
        // Setting data-theme for custom CSS variables (if any)
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Ensure localStorage update happens consistently here
    }, [isDarkMode]);

    // TS7006 Fix: Explicitly typing the event parameter 'e'
    const toggleTheme = (e: ChangeEvent<HTMLInputElement>): void => {
        const checked = e.target.checked;
        setIsDarkMode(checked);
        // The localStorage update is now handled in the useEffect for consistency,
        // but we'll keep a direct set here for immediate feedback, though useEffect is the source of truth.
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
                            ${isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-300'}`} 
                htmlFor='darkmode-toggle'
            >
                <span 
                    className={`
                        w-6 h-6 rounded-full flex items-center justify-center absolute transition-transform duration-300 shadow-lg
                        ${isDarkMode 
                            ? 'transform translate-x-[20px] bg-blue-500' 
                            : 'transform translate-x-0 bg-yellow-400' 
                        }
                    `}
                >
                    {isDarkMode ? (
                        <MoonIcon className='text-white' />
                    ) : (
                        <SunIcon className='text-gray-800' />
                    )}
                </span>
            </label>
        </div>
    )
}

export default DarkMode;
