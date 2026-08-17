import { VscTerminalDebian } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { RiLandscapeLine } from "react-icons/ri";
import { IoDesktopSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const getProjectsFields = () => [
  {
    path: "/portfolio/frontendmentor",
    icon: <ImHtmlFive className="mt-1" size={18} color="#ED254E" />,
    title: "FrontendMentor",
  },
  {
    path: "/portfolio/project/8",
    icon: <MdShoppingCart className="mt-1" size={18} color="#ED254E" />,
    title: "Lew",
  },
  {
    path: "/portfolio/project/7",
    icon: <IoDesktopSharp className="mt-1" size={18} color="#ED254E" />,
    title: "Orca",
  },
  {
    path: "/portfolio/project/5",
    icon: <SiReact className="mt-1" size={18} color="#ED254E" />,
    title: "Portfolio",
  },
  {
    path: "/portfolio/project/3",
    icon: <VscTerminalDebian className="mt-1" size={18} color="#ED254E" />,
    title: "Exitor",
  },
  {
    path: "/portfolio/project/6",
    icon: <RiLandscapeLine className="mt-1" size={18} color="#ED254E" />,
    title: "Oriyam",
  },
  {
    path: "/portfolio/project/4",
    icon: <FaGitAlt className="mt-1" size={18} color="#ED254E" />,
    title: "Git Simulator",
  },
  {
    path: "/portfolio/project/2",
    icon: <FaDatabase className="mt-1" size={18} color="#ED254E" />,
    title: "SpareParts Management System",
  },
  {
    path: "/portfolio/project/1",
    icon: <BsStack className="mt-1" size={18} color="#ED254E" />,
    title: "SuperMarket Billing System",
  },
];

export default getProjectsFields