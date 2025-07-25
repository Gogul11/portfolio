import { useEffect, useState } from 'react'
import Sidebar from './pages/sidebar'
import AboutMe from './pages/aboutMe'
import Skills from './pages/skills';
import { RiExpandLeftRightFill } from "react-icons/ri";
import ECA from './pages/eca'
import Contact from './pages/contact';
import Resume from './pages/resume';
import {projectDetails} from './utils/projectDetails';
import Project from './components/project'
import OnGoing from './pages/onGoing';
import Loa from './pages/loa';
import {IconCarouselHorizontal, IconCarouselVertical} from './components/Animation';
import { useLocation } from 'react-router';

function App() {

  const[side, setSide] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const location = useLocation()

  const[pages, setPages] = useState("aboutMe")

  useEffect(() => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        setPages(hash);
      }
  }, [location]);


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth >= 768) setSide(false)
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
      document.querySelector('.content-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pages]);


  

  return (
    <div className='h-screen flex'>

      {/* Sidebar - 20% width */}
      <div>
        {windowSize >= 768 &&
          <div className='w-[100%] h-full flex items-center'>
            <Sidebar setCurrentPage={setPages}/>
          </div>
        }

      </div>

        {windowSize < 768 && (
          <>

            {side && (
              <div className="fixed inset-0 z-20 backdrop-blur-sm bg-black/30 transition duration-300"></div>
            )}
            <div className='fixed top-[50%]  z-40 text-white bg-indigo-700 rounded-2xl ml-2'>
              <RiExpandLeftRightFill 
                size='30' 
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
          </>

        )}
      
      {/* content */}
      <div className='flex-1 overflow-y-auto content-scroll scrollbar-none'>
        {windowSize < 768 && (
           <div className='mt-6'>
                <IconCarouselHorizontal/>
           </div>
        )}
      <div className="max-md:mt-12">
          {(() => {
            switch (true) {
              case pages === "aboutMe":
                return <AboutMe />;

              case pages === "skills":
                return <Skills />;

              case pages === "eca":
                return <ECA />;

              case pages.startsWith("project"): {
                const index = parseInt(pages.replace("project", "")) - 1;
                const project = projectDetails[index];

                return project ? (
                  <div className="flex justify-center items-start mt-12 mb-4 min-h-screen">
                    <Project
                      key={index}
                      title={project.title}
                      path={project.path}
                      repolink={project.repolink}
                      liveurl={project.liveurl}
                      content={project.content}
                    />
                  </div>
                ) : null;
              }

              case pages === "ongoingProjects":
                return <OnGoing />;

              case pages === "loa":
                return <Loa />;

              case pages === "contact":
                return <Contact />;

              case pages === "resume":
                return <Resume />;

              default:
                return null;
            }
          })()}
      </div>

        
      </div>

      {windowSize >= 768 && 
        <div className='mr-4 h-full'>
          <IconCarouselVertical/>
        </div>
      }
</div>

  )
}

export default App


