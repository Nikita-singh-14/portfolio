import { useState, useEffect } from 'react';

// --- FIXED ICONS: Replacing all react-icons with lucide-react (which is natively available) ---
import {
  Home, User, ListChecks, Briefcase, FolderKanban, Award, FileText, Phone, // Navigation & Section Icons
  Menu, X, Linkedin, Github, Code // Utility & Social Icons (Sun and Moon added for toggle)
} from 'lucide-react'

// --- Global Data (Mock Content) ---
const PORTFOLIO_DATA = {
  name: "Nikita Singh",
  tagline: "Full-Stack Developer | Innovator | Problem Solver",
  sections: [
    { id: "home", title: "Home", icon: Home },
    { id: 'about', title: 'About', icon: User },
    { id: 'skills', title: 'Skills', icon: ListChecks },
    { id: 'experience', title: 'Experience', icon: Briefcase },
    { id: 'portfolio', title: 'Portfolio', icon: FolderKanban },
    { id: 'certifications', title: 'Certifications', icon: Award },
    { id: 'resume', title: 'Resume', icon: FileText },
    { id: 'contact', title: 'Contact', icon: Phone },
  ],
  bio: "Hi, I'm Nikita Singh. I specialize in building robust and scalable web applications using React and the MERN stack. My passion lies in turning complex problems into elegant, efficient, and user-friendly code solutions. I have experience delivering high-quality projects for various tech challenges.",
  skills: [
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Netlify/Vercel"] },
  ],
  experiences: [
    { title: "MERN Stack Developer (Intern)", company: "WebTech Solutions", duration: "Jan 2024 - Jul 2024", description: "Developed and maintained several components using React and implemented REST APIs using Express/Node. Contributed to database schema design in MongoDB." },
    { title: "Freelance Web Developer", company: "Self-Employed", duration: "2023 - Present", description: "Built custom websites for small businesses, focusing on responsive design and performance optimization." },
  ],
  projects: [
    { name: "Full-Stack E-commerce", description: "A complete e-commerce platform featuring authentication, product management, and payment gateway integration.", tags: ["MERN", "Redux", "Stripe"] },
    { name: "Real-Time Chat App", description: "Used Socket.IO to implement instant messaging and user status updates.", tags: ["React", "Socket.IO", "Node.js"] },
    { name: "Portfolio Website (This one!)", description: "Designed and implemented a responsive single-page portfolio using React and Tailwind CSS.", tags: ["React", "Tailwind CSS", "SPA"] },
  ],
  certs: [
    "Certified React Developer (Coursera)",
    "JavaScript Algorithms and Data Structures (freeCodeCamp)",
    "MongoDB Certified Developer",
  ]
};

// --- Sub-Components for Sections ---

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode; // Type for content passed inside the component
}

// 2. Apply the type to the functional component
const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="min-h-screen pt-16 lg:pt-24 px-6 md:px-12 bg-gray-50 border-b border-gray-200 ">
    <h2 className="text-4xl font-extrabold mb-8 text-indigo-600 border-b-4 border-indigo-200 pb-2 inline-block">
      {title}
    </h2>
    <div className="py-6">{children}</div>
  </section>
);

const HomeSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gray-100 ">
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-black text-gray-900] mb-4 leading-tight">
        {PORTFOLIO_DATA.name}
      </h1>
      <p className="text-2xl md:text-4xl font-light text-indigo-600 dark:text-indigo-400 mb-8">
        {PORTFOLIO_DATA.tagline}
      </p>
      <a href="#about" className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
        View My Work
      </a>
    </div>
  </section>
);

const AboutSection = () => (
  <Section id="about" title="About Me">
    <div className="bg-blue-100 p-8 rounded-xl shadow-2xl">
      <p className="text-black  text-xl leading-relaxed">
        {PORTFOLIO_DATA.bio}
      </p>
    </div>
  </Section>
);

const SkillsSection = () => (
  <Section id="skills" title="Technical Skills">
    <div className="grid md:grid-cols-3 gap-8">
      {PORTFOLIO_DATA.skills.map((skill, index) => (
        <div key={index} className="p-6 bg-white  rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-indigo-500">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800  flex items-center">
            {/* Using Lucide Code icon */}
            <Code className="w-6 h-6 mr-3 text-indigo-500" />
            {skill.category}
          </h3>
          <ul className="space-y-3 list-none p-0">
            {skill.items.map((item, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-400 font-medium">
                <span className="text-indigo-500 mr-2 font-bold text-lg">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const ExperienceSection = () => (
  <Section id="experience" title="Work Experience">
    <div className="space-y-10">
      {PORTFOLIO_DATA.experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 group">
          {/* Vertical Line */}
          <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 hidden sm:block"></div>
          {/* Dot */}
          <div className="absolute top-1 left-[-4px] w-4 h-4 rounded-full bg-indigo-600 group-hover:bg-pink-500 transition duration-300 hidden sm:block"></div>

          <p className="text-sm font-medium text-gray-500  mb-1 sm:absolute sm:top-0 sm:left-0 sm:w-28 sm:text-right">{exp.duration}</p>
          <h3 className="text-xl font-bold text-gray-800 ">{exp.title}</h3>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{exp.company}</p>
          <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

const PortfolioSection = () => (
  <Section id="portfolio" title="Projects & Portfolio">
    <div className="grid md:grid-cols-2 gap-8">
      {PORTFOLIO_DATA.projects.map((project, index) => (
        <div key={index} className="p-6 bg-white  rounded-xl shadow-2xl transition duration-300 hover:scale-[1.02] hover:border-indigo-500 border-2 border-transparent">
          <h3 className="text-2xl font-bold mb-3 text-indigo-600 ">{project.name}</h3>
          <p className="text-gray-700  mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full ">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const CertificationsSection = () => (
  <Section id="certifications" title="Certifications">
    <div className="space-y-4">
      {PORTFOLIO_DATA.certs.map((cert, index) => (
        <div key={index} className="flex items-center p-4 bg-white  rounded-lg shadow-lg hover:bg-indigo-50  transition duration-200">
          {/* Using Lucide Award icon */}
          <Award className="w-6 h-6 mr-4 text-yellow-500 flex-shrink-0" />
          <span className="text-gray-700  font-medium">{cert}</span>
        </div>
      ))}
    </div>
  </Section>
);

const ResumeSection = () => (
  <Section id="resume" title="Resume">
    <div className="text-center p-10 bg-white  rounded-xl shadow-2xl">
      <p className="text-xl text-gray-700  mb-6">
        You can download my full resume for a detailed view of my qualifications and professional history.
      </p>
      <a
        href="#" // Placeholder: Replace with actual resume PDF link
        className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-xl font-bold rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        download
      >
        {/* Using Lucide FileText icon */}
        <FileText className="w-6 h-6 mr-3" />
        Download Resume (PDF)
      </a>
    </div>
  </Section>
);

const ContactSection = () => (
  <Section id="contact" title="Get In Touch" >
    <div className="flex flex-col justify-center items-center max-w-xl mx-auto p-6 bg-white gap-10">
      <p className="text-center text-black  mb-8 text-lg">
        I am currently open to new opportunities. Feel free to reach out via email using the form below!
      </p>
      <form className="space-y-4 bg-white  p-8 rounded-xl shadow-2xl flex flex-col gap-10 w-full ">
        <input type="text" placeholder="Your Name" className="w-full h-12 p-4 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input type="email" placeholder="Your Email" className="w-full h-12 p-4 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
        <button type="submit" className="w-full py-4 h-12 bg-indigo-600 text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition duration-300 shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  </Section>
);

const FooterComponent = () => (
  <footer className="w-full h-28 flex justify-center items-center p-6 text-center bg-gray-900 text-gray-400 text-sm">
    <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved. Built with React & Tailwind CSS.</p>
  </footer>
);




const SidebarComponent = ({ sections, activeSection, onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle link click
  const handleLinkClick = (id) => {
    onLinkClick(id); // Custom function to handle scroll in App component (if needed)
    setIsMenuOpen(false); // Close menu on mobile
  };

  return (
    <>
      {/* Toggle button - Fixed on top right for mobile */}
      <div className='absolute top-4 right-4 z-50 lg:hidden '>
        {isMenuOpen ? (
          <X // Close Icon
            className="text-5xl cursor-pointer text-white burger rounded-lg bg-black hover:bg-gray-900transition"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <Menu // Menu Icon
            className="text-5xl cursor-pointer text-white burger rounded-lg bg-black hover:bg-gray-900 transition"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* Sidebar - Fixed for Desktop, Slide-out for Mobile */}
      <div
        className={`flex-col gap-8 bg-gray-900 text-gray-400 w-[20rem] h-screen fixed top-0 left-0 z-40 p-6 transition-transform duration-300 ease-in-out lg:flex flex-shrink-0 ${isMenuOpen ? 'translate-x-0 flex' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Profile Section */}
        <div className='flex flex-col items-center gap-2 mt-4 sidebar'>
          {/* Using a placeholder image URL for simplicity */}
          <img
            className='w-[11rem] h-[11rem] rounded-full object-cover border-4 border-gray-600 shadow-xl'
            src="profile.jpg"
            alt="Profile"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/180x180/374151/ffffff?text=Profile" }}
          />
          <h3 className='text-white text-3xl font-bold mt-2'>{PORTFOLIO_DATA.name}</h3>
          <div className='flex gap-4 text-white text-2xl'>
            <a href="https://www.linkedin.com/in/nikita-singh-3560652bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className='hover:text-blue-400 transition duration-200' /></a>
            <a href="https://github.com/Nikita-singh-14" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className='hover:text-blue-400 transition duration-200' /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><X className='hover:text-blue-400 transition duration-200' /></a>
          </div>
        </div>

        <ul className='flex flex-col gap-5 mt-8 text-xl flex-grow overflow-y-auto'>
          {sections.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`} // Single-page anchor link
                className={`flex text-2xl items-center gap-4 cursor-pointer p-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-white bg-indigo-600 shadow-lg font-semibold' : 'hover:text-white hover:bg-gray-800'}`}
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
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

// --- Main App Component ---

const App = () => {
  // State to track the active section for highlighting the sidebar link
  const [activeSection, setActiveSection] = useState('home');




  // Effect to set up Intersection Observer for scroll-based active state
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -50% 0px', // Trigger when section is 50% into viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    PORTFOLIO_DATA.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  // Function to handle click and force scroll if needed (though scroll-smooth should handle it)
  const handleSidebarLinkClick = (id) => {
    // This is mainly to ensure the section is scrolled into view, 
    // though the href="#id" combined with scroll-smooth CSS often suffices.
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className="min-h-screen antialiased font-sans flex bg-white">

      {/* 1. Fixed Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen w-[20rem] bg-white shadow-md z-50">
        <SidebarComponent
          sections={PORTFOLIO_DATA.sections}
          activeSection={activeSection}
          onLinkClick={handleSidebarLinkClick}
        />
      </div>
      <div className='flex flex-col'>
        <div className="flex flex-col gap-10 justify-center items-center w-full max-h-screen overflow-y-scroll scroll-smooth lg:ml-[20rem]">
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <PortfolioSection />
          <CertificationsSection />
          <ResumeSection />
          <ContactSection />


        </div>
        <div className='position bottom-0'>
          <FooterComponent />
        </div>
        

      </div>



    </div>
  );
};

export default App;
