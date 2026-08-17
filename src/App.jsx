import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router";
import Sidebar from "./pages/sidebar";
import AboutMe from "./pages/aboutMe";
import Skills from "./pages/skills";
import { RiExpandLeftRightFill } from "react-icons/ri";
import ECA from "./pages/eca";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import OnGoing from "./pages/onGoing";
import Loa from "./pages/loa";
import FrontendMentor from "./pages/frontendMentor";
import ExperienceTimeline from "./pages/experience";
import NotFound from "./pages/not-found";
import Project from "./components/project";
import { projectDetails } from "./utils/projectDetails";
import {
  IconCarouselHorizontal,
  IconCarouselVertical,
} from "./components/Animation";

function App() {
  const [side, setSide] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);

      if (window.innerWidth >= 768) {
        setSide(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to top whenever route changes
  useEffect(() => {
    document
      .querySelector(".content-scroll")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="h-screen flex">

      {/* Sidebar */}
      <div>
        {windowSize >= 768 && (
          <div className="w-full h-full flex items-center">
            <Sidebar />
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      {windowSize < 768 && (
        <>
          {side && (
            <div className="fixed inset-0 z-20 backdrop-blur-sm bg-gunmetal/30" />
          )}

          <div className="fixed top-[50%] z-40 ml-2 rounded-2xl bg-crayol text-gunmetal">
            <RiExpandLeftRightFill
              size={30}
              onClick={() => setSide(!side)}
            />

            {side && (
              <div className="fixed z-30 w-full top-[50%] left-[50%] -translate-x-1/3 -translate-y-1/2">
                <Sidebar
                  setSide={() => setSide(false)}
                />
              </div>
            )}
          </div>
        </>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto content-scroll scrollbar-none">

        {windowSize < 768 && (
          <div className="mt-6">
            <IconCarouselHorizontal />
          </div>
        )}

        <div className="max-md:mt-12">

          <Routes>

            {/* Home */}
            <Route path="/portfolio/" element={<AboutMe />} />

            {/* Pages */}
            <Route path="/portfolio/skills" element={<Skills />} />

            <Route path="/portfolio/eca" element={<ECA />} />

            <Route
              path="/portfolio/ongoingProjects"
              element={<OnGoing />}
            />

            <Route
              path="/portfolio/frontendmentor"
              element={<FrontendMentor />}
            />

            <Route path="/portfolio/loa" element={<Loa />} />

            <Route path="/portfolio/contact" element={<Contact />} />

            <Route path="/portfolio/resume" element={<Resume />} />

            <Route
              path="/portfolio/experience"
              element={<ExperienceTimeline />}
            />

            {/* Project */}
            <Route
              path="/portfolio/project/:id"
              element={<ProjectPage />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>

        </div>
      </div>

      {/* Right animation */}
      {windowSize >= 768 && (
        <div className="mr-4 h-full">
          <IconCarouselVertical />
        </div>
      )}
    </div>
  );
}

/*
  Project wrapper
*/
function ProjectPage() {
  const { id } = useParams();

  const index = parseInt(id);

  const project = projectDetails.find(
    (p) => p.num === index
  );

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="flex justify-center items-start mt-12 mb-4 min-h-screen">
      <Project
        title={project.title}
        path={project.path}
        repolink={project.repolink}
        liveurl={project.liveurl}
        content={project.content}
      />
    </div>
  );
}

export default App;