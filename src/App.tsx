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
      <div className='lg:flex min-h-screen'> 
        <div className=" lg:block lg:w-[20rem] flex-shrink-0  md:block"> 
          <Sidebar />
        </div>
        <div className='flex-grow w-full'>
         <Home />
         <About />
         <Exp />
         <Portfolio />
         <Resume />
         <Skills />
         <Cert /> 
         <Contact />
         <Footer />
          
        </div>
      </div>
  )
}

export default App