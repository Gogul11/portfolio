import { VscTerminalDebian } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { RiLandscapeLine } from "react-icons/ri";
import { IoDesktopSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const getProjectsFields = (setCurrentPage) => [
    {
        func : () => setCurrentPage("frontendmentor"),
        icon : <ImHtmlFive className="mt-1" size={18} color="#ED254E"/>,
        title : 'FrontendMentor'
    },
    {
        func: () => setCurrentPage("project8"),
        icon: <MdShoppingCart className='mt-1' size={18} color='#ED254E' />,
        title: 'Lew'
    },
    {
        func: () => setCurrentPage("project7"),
        icon: <IoDesktopSharp className='mt-1' size={18} color='#ED254E' />,
        title: 'Orca'
    },
    {
        func: () => setCurrentPage("project5"),
        icon: <SiReact className='mt-1' size={18} color='#ED254E' />,
        title: 'Portfolio'
    },
    {
        func: () => setCurrentPage("project3"),
        icon: <VscTerminalDebian className='mt-1' size={18} color='#ED254E' />,
        title: 'Exitor'
    },
    {
        func: () => setCurrentPage("project6"),
        icon: <RiLandscapeLine className='mt-1' size={18} color='#ED254E' />,
        title: 'Oriyam'
    },
    {
        func: () => setCurrentPage("project4"),
        icon: <FaGitAlt className='mt-1' size={18} color='#ED254E' />,
        title: 'Git Simulator'
    },
    {
        func: () => setCurrentPage("project2"),
        icon: <FaDatabase className='mt-1' size={18} color='#ED254E' />,
        title: 'SpareParts Management System'
    },
    {
        func: () => setCurrentPage("project1"),
        icon: <BsStack className='mt-1' size={18} color='#ED254E' />,
        title: 'SuperMarket Billing System'
    }
];

export default getProjectsFields