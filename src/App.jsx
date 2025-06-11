import { useEffect, useState } from 'react'
import Sidebar from './pages/sidebar'
import AboutMe from './pages/aboutMe'
import Skills from './pages/skills';
import { RiExpandLeftRightFill } from "react-icons/ri";
import ECA from './pages/eca'
import Contact from './pages/contact';
import Resume from './pages/resume';


function App() {

  const[side, setSide] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const[pages, setPages] = useState("aboutMe")

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth >= 768) setSide(false)
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    <div className='h-screen flex overflow-hidden'>
      {/* Sidebar - 20% width */}
      <div>

        {windowSize >= 768 &&
          <div className='w-[100%] h-full flex items-center'>
            <Sidebar setCurrentPage={setPages}/>
          </div>
        }

      </div>

        {windowSize < 768 && (
          <div className='fixed top-[50%]  z-40 text-white bg-amber-400 rounded-2xl ml-2'>
            <RiExpandLeftRightFill 
              size='32' 
              onClick={() => setSide(!side)}
            />

            {
              side && (
                <div className='fixed z-30 w-[100%] top-[50%] left-[50%] transform -translate-x-1/3 -translate-y-1/2 '>
                  <Sidebar setCurrentPage={(page) => {
                    setPages(page)
                    setSide(false) 
                  }} />
                </div>
              )
          }
          </div>
        )}
      

      {/* AboutMe - 80% width */}
      <div className='flex-1 overflow-y-auto '>
        <div className='max-md:mt-12'>
          {pages === "aboutMe" && <AboutMe/>}
          {pages === "skills" && <Skills/>}
          {pages === "eca" && <ECA/>}
          {pages === "contact" && <Contact/>}
          {pages === "resume" && <Resume/>}
        </div>
      </div>
</div>

  )
}

export default App


