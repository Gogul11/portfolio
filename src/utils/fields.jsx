import { RiReactjsFill } from "react-icons/ri";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { PiHash } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const getFields = (setCurrentPage) => [
    {
        func : () => setCurrentPage("aboutMe"),
        icon : <FaDocker color='#059df5' size={30}/>,
        title : 'aboutMe.docker'
    },
    {
        func : () => setCurrentPage("skills"),
        icon : <PiHash color='#2997e6' size={30} />,
        title : 'skills.css'
    },
    {
        func : () => setCurrentPage("eca"),
        icon : <RiReactjsFill color='#2997e6' size={30} />,
        title : 'ECA.jsx'
    },
    {
        func : () => setCurrentPage("contact"),
        icon : <PiBracketsCurlyLight color='#f2f23a' size={30} />,
        title : 'Contact.json'
    },
    {
        func : () => setCurrentPage("resume"),
        icon : <FaFilePdf color='red' size={28}/>,
        title : 'Resume.pdf'
    },
    {
        func : () => setCurrentPage("loa"),
        icon : <SiEthereum  size={28} color="gray"/>,
        title : 'Letter of Appreciations'
    },
]

export default getFields;