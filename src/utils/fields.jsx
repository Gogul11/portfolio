import { RiReactjsFill } from "react-icons/ri";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { PiHash } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import OngoingAnimation from "../components/ongoingAnimation";
import { PiFileSql } from "react-icons/pi";

const getFields = () => [
  {
    path: "/portfolio/",
    icon: <FaDocker color="#ED254E" size={30} />,
    title: "aboutMe.docker",
  },
  {
    path: "/portfolio/skills",
    icon: <PiHash color="#ED254E" size={30} />,
    title: "skills.css",
  },
  {
    path: "/portfolio/experience",
    icon: <PiFileSql color="#ED254E" size={30} />,
    title: "exp.sql",
  },
  {
    path: "/portfolio/eca",
    icon: <RiReactjsFill color="#ED254E" size={30} />,
    title: "ECA.jsx",
  },
  {
    path: "/portfolio/contact",
    icon: <SiSolidity color="#ED254E" size={30} />,
    title: "Contact.sol",
  },
  {
    path: "/portfolio/resume",
    icon: <FaFilePdf color="#ED254E" size={28} />,
    title: "Resume.pdf",
  },
  {
    path: "/portfolio/loa",
    icon: <SiEthereum size={30} color="#ED254E" />,
    title: "Letter of Appreciations",
  },
  {
    path: "/portfolio/ongoingProjects",
    icon: <OngoingAnimation />,
    title: "Ongoing Projects",
  },
];
export default getFields;