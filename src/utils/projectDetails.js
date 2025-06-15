const projectDetails = [
  {
    title: 'Exitor',
    path: '/projectsImg/exitor.png',
    repolink: 'https://github.com/Gogul11/Exitor',
content: "Exitor is a lightweight VI-like text editor built specifically for the xv6 teaching operating system. It replicates core text editing behaviors using Insert and Command modes. Exitor supports essential commands like :w (save), :q (quit), :wq (save and quit), :y (yank lines), and :p (paste). Clipboard functionality is implemented via a fixed-size buffer for line-based copy-paste operations. Beyond editing, it introduces user-defined system calls — xmalloc, xfree, xcalloc, xrealloc — to enable dynamic memory management in xv6, a system that traditionally lacks such functionality. These system calls mimic malloc/calloc-style operations using a header-based allocator and free-list logic. Additional utilities like clear() and hello() system calls are also provided. Exitor not only enhances xv6 usability but also demonstrates system-level programming skills, OS modification, and user-space utility creation."
  },
  {
    title: 'Git simulator',
    path: '/projectsImg/git-simulator.png',
    repolink: 'https://github.com/Gogul11/GIT-Simulator',
    liveurl: 'https://git-simulator-eight.vercel.app/',
content: "A full-stack Git branching and commit visualization simulator aimed at helping learners understand internal Git operations interactively. The frontend, built with React and Cytoscape.js, offers a dynamic visualization of the Git DAG (Directed Acyclic Graph), where users can create commits, form branches, switch between them, and perform merges. Each action is reflected in real-time on the visual graph with color-coded nodes representing commit types (normal, branch head, merge). The backend, developed in C++ using the Crow framework, handles core Git-like logic from scratch, such as commit creation, parent tracking, diff storage, and merge conflict-free resolution. Sessions are uniquely managed using IDs so each user has an isolated repository environment. REST APIs enable smooth interaction between frontend and backend. This project is ideal for Git beginners, CS educators, or workshops aiming to demystify how Git manages version control under the hood."
  },
  {
    title: 'Spareparts Management System',
    path: '/projectsImg/sparepartsmanagementsystem.png',
    repolink: 'https://github.com/Gogul11/SpareParts_Management_System',
    content: 'A full-stack web application designed to manage spare parts inventory with role-based access for Users, Admins, and Suppliers. Users can browse and order spare parts, Admins manage inventory, users, suppliers, and categories, while Suppliers update and maintain part listings. The application ensures smooth workflow and inventory tracking through a centralized system. Built with React (frontend), Node.js (backend), and PostgreSQL (database), this project was developed as part of a DBMS course to demonstrate practical implementation of database systems in real-world scenarios'
  },
  {
    title: 'Supermarket Billing System',
    path: '/projectsImg/supermarket.png',
    repolink: 'https://github.com/Gogul11/SuperMarketBillingSystem',
    content: 'A full-stack billing system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline the supermarket checkout process. It supports secure staff login via JWT, dynamic inventory management (add, update, delete products), and real-time billing with total price calculations and discounts. The system enables bill generation, printing, and maintains transaction records for reporting. This project was developed as part of an internship to demonstrate a practical solution for retail management using modern web technologies.'
  }
];

const ongoingProjects = [
  {
    title: 'Linux Lab IDE',
    desc: 'Custom IDE with integrated terminal for lab and group collaboration',
    width: 15,
  },
  {
    title: 'Transfer Now',
    desc: 'A QR based file sharing system',
    width: 10,
  },
  {
    title: 'Cloth Store',
    desc: 'A small e-commerce site for selling cloths aimed for small scale business',
    width: 50,
  },
];


export {projectDetails, ongoingProjects};
