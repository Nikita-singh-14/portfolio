import './App.css'
import Sidebar from './pages/Sidebar'
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Exp from './pages/Exp';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Cert from './pages/Cert';
import Contact from './pages/Contact';
import { useCallback, useState } from 'react';

function App() {
  const sectionIds = [
        "home", "about", "skills", "experience", 
         "certifications", "resume", "contact"
    ];
    const [activeSection, setActiveSection] = useState<string>("home");
  const handleLinkClick = useCallback((id: string) => {
        setActiveSection(id);
        // Optional: Implement smooth scroll here if needed
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);
  const placeholderSections = sectionIds.map(id => ({ 
        id: id, 
        title: id.charAt(0).toUpperCase() + id.slice(1), 
        icon: (() => null) as any 
    }));

  return (
      <div className='lg:flex '> 
        <div className="lg:w-[18rem] flex-shrink-0  lg:block"> 
          <Sidebar 
          sections={placeholderSections} // Passes the placeholder array
          activeSection={activeSection} // Passes the current active state
          onLinkClick={handleLinkClick}/>
        </div>
        <div className='flex-grow w-full'>
         <Home id="home"/>
         <About id="about" />
         <Exp id="experience" />
         <Resume id="resume" />
         <Skills id="skills" />
         <Cert id="certifications" /> 
         <Contact id="contact" />
         <Footer />
          
        </div>
      </div>
  )
}

export default App