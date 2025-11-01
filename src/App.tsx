import './App.css'
import Sidebar from './pages/Sidebar'
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Exp from './pages/Exp';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Cert from './pages/Cert';
import Contact from './pages/Contact';

function App() {

  return (
      <div className='lg:flex '> 
        <div className=" lg:block lg:w-[20rem] flex-shrink-0  md:block"> 
          <Sidebar />
        </div>
        <div className='flex-grow w-full'>
         <Home id="home"/>
         <About id="about" />
         <Exp id="experience" />
         <Portfolio id="portfolio" />
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