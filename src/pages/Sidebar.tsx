import { useState } from 'react';
import React from 'react'; // Retaining for compatibility if needed, though usually implicit

// Using lucide-react for consistency with App.tsx
import {
  Home, User, ListChecks, Briefcase, FolderKanban, Award, FileText, Phone, // Navigation Icons
  Menu, X, Linkedin, Github // Utility & Social Icons
} from 'lucide-react';

// --- Type Definitions ---
// Define the structure for a section item (as defined in App.tsx PORTFOLIO_DATA)
interface SectionItem {
  id: string;
  title: string;
  icon: React.ElementType; // Icon component type
}

// Define the component's props structure
interface SidebarProps {
  sections: SectionItem[];
  activeSection: string;
  onLinkClick: (id: string) => void;
}

// Fixed: Applied SidebarProps interface to the component
const Sidebar = ({ sections, activeSection, onLinkClick }: SidebarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fixed: Defined the missing 'toggleMenu' function (TS2304)
  const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
  };
  
  // Fixed: Consolidated and typed 'handleLinkClick' (TS2451 & TS7006)
  const handleLinkClick = (id: string) => {
    onLinkClick(id); 
    setIsMenuOpen(false);
  };

  // Removed the conflicting local 'navItems' array and replaced with the 'sections' prop.

  return (
    <div className='side'> 
      
      {/* Fixed: Replaced IoClose/IoReorderThree with lucide-react Menu/X */}
      <div className='absolute top-4 right-4 z-50'>
        {isMenuOpen ? (
          <X 
            className="lg:hidden text-5xl cursor-pointer text-gray-900 hover:text-blue-600"
            onClick={toggleMenu}
          />
        ) : (
          <Menu
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
          <img 
            className='w-[11rem] h-[11rem] rounded-full border-4 border-gray-600' 
            src="profile.jpg" 
            alt="Profile" 
            // NOTE: Add the onError handler here for robust image loading if this file is deployed separately
          />
          <h3 className='text-white text-3xl'>Nikita Singh</h3>
          <div className='flex gap-4 text-white text-2xl'>
            {/* Fixed: Replaced react-icons with lucide-react */}
            <a href="https://www.linkedin.com/in/nikita-singh-3560652bb/" target="_blank" rel="noopener noreferrer"><Linkedin className='hover:text-blue-400' /></a>
            <a href="https://github.com/Nikita-singh-14" target="_blank" rel="noopener noreferrer"><Github className='hover:text-blue-400' /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><X className='hover:text-blue-400' /></a> 
          </div>
        </div>

        {/* Navigation Links (using the 'sections' prop) */}
        <ul className='flex flex-col gap-5 mt-8 text-xl flex-grow overflow-y-auto'>
          {sections.map((item) => { // Fixed: Using sections prop instead of undefined navItems
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`} 
                className={`
                  flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-colors duration-200
                  ${isActive 
                      ? 'text-white bg-indigo-600 shadow-lg font-semibold' 
                      : 'hover:text-white hover:bg-gray-800'
                  }
                `}
                onClick={() => handleLinkClick(item.id)} 
              >
                <Icon className='text-2xl' />
                <span>{item.title}</span>
              </a>
            )
          })}
        </ul>
      </div>

      {/* Mobile Overlay */}
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