import { VscTerminalDebian } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import OngoingAnimation from "../components/ongoingAnimation";


const getProjectsFields = (setCurrentPage) => [
    {
        func: () => setCurrentPage("project1"),
        icon: <VscTerminalDebian className='mt-1' size={18} color='red' />,
        title: 'Exitor'
    },
    {
        func: () => setCurrentPage("project2"),
        icon: <FaGitAlt className='mt-1' size={18} color='red' />,
        title: 'Git Simulator'
    },
    {
        func: () => setCurrentPage("project3"),
        icon: <FaDatabase className='mt-1' size={18} color='gray' />,
        title: 'SpareParts Management System'
    },
    {
        func: () => setCurrentPage("project4"),
        icon: <BsStack className='mt-1' size={18} color='green' />,
        title: 'SuperMarket Billing System'
    },
    {
        func : () => setCurrentPage("ongoingProjects"),
        icon : <OngoingAnimation/>,
        title : 'Ongoing Projects'
    }
];

export default getProjectsFields