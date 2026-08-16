import { RiReactjsFill } from "react-icons/ri";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { PiHash } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import OngoingAnimation from "../components/ongoingAnimation";
import { PiFileSql } from "react-icons/pi";

const getFields = (setCurrentPage) => [
    {
        func : () => setCurrentPage("aboutMe"),
        icon : <FaDocker color='#ED254E' size={30}/>,
        title : 'aboutMe.docker'
    },
    {
        func : () => setCurrentPage("skills"),
        icon : <PiHash color='#ED254E' size={30} />,
        title : 'skills.css'
    },
    {
        func : () => setCurrentPage("experience"),
        icon : <PiFileSql color='#ED254E' size={30} />,
        title : 'exp.sql'
    },
    {
        func : () => setCurrentPage("eca"),
        icon : <RiReactjsFill color='#ED254E' size={30} />,
        title : 'ECA.jsx'
    },
    {
        func : () => setCurrentPage("contact"),
        icon : <SiSolidity color='#ED254E' size={30} />,
        title : 'Contact.sol'
    },
    {
        func : () => setCurrentPage("resume"),
        icon : <FaFilePdf color='#ED254E' size={28}/>,
        title : 'Resume.pdf'
    },
    {
        func : () => setCurrentPage("loa"),
        icon : <SiEthereum  size={30} color="#ED254E"/>,
        title : 'Letter of Appreciations'
    },
    {
        func : () => setCurrentPage("ongoingProjects"),
        icon : <OngoingAnimation/>,
        title : 'Ongoing Projects'
    }
]

export default getFields;