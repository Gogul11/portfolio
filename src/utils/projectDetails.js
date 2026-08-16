
const projectDetails = [
  {
    num : 1,
    title: 'Supermarket Billing System',
    path: '/portfolio/projectsImg/supermarket.png',
    repolink: 'https://github.com/Gogul11/SuperMarketBillingSystem',
    content: `
              <p>
                A full-stack <span class="text-crayol">billing system</span> built with the <span class="text-crayol">MERN stack</span> 
                (<span class="text-crayol">MongoDB</span>, <span class="text-crayol">Express.js</span>, <span class="text-crayol">React.js</span>, <span class="text-crayol">Node.js</span>) 
                to streamline the supermarket checkout process. 
                It supports secure staff login via <span class="text-crayol">JWT</span>, dynamic inventory management (add, update, delete products), 
                and real-time billing with total price calculations and discounts. 
                The system enables bill generation, printing, and maintains transaction records for reporting. 
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Frontend:</span> React.js</li>
                <li><span class="text-crayol">Backend:</span> Node.js + Express.js</li>
                <li><span class="text-crayol">Database:</span> MongoDB</li>
                <li><span class="text-crayol">Authentication:</span> JWT</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Features</h3>
              <ol class="list-disc list-inside">
                <li>Secure staff login and role-based access</li>
                <li>Dynamic inventory management (add, update, delete products)</li>
                <li>Real-time billing with total price calculations and discounts</li>
                <li>Bill generation, printing, and transaction record keeping</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Practical solution for supermarket checkout management</li>
                <li>Full-stack MERN implementation with modern web technologies</li>
                <li>Secure, real-time, and efficient billing workflow</li>
              </ol>
            `
  },
  {
    num : 2,
    title: 'Spareparts Management System',
    path: '/portfolio/projectsImg/sparepartsmanagementsystem.png',
    repolink: 'https://github.com/Gogul11/SpareParts_Management_System',
    content: `
              <p>
                A full-stack web application designed to manage <span class="text-crayol">spare parts inventory</span> 
                with role-based access for <span class="text-crayol">Users, Admins, and Suppliers</span>. 
                Users can browse and order spare parts, Admins manage inventory, users, suppliers, and categories, 
                while Suppliers update and maintain part listings. 
                The application ensures smooth workflow and inventory tracking through a centralized system.
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">Roles & Features</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Users:</span> Browse and order spare parts</li>
                <li><span class="text-crayol">Admins:</span> Manage inventory, users, suppliers, and categories</li>
                <li><span class="text-crayol">Suppliers:</span> Update and maintain part listings</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Frontend:</span> React</li>
                <li><span class="text-crayol">Backend:</span> Node.js</li>
                <li><span class="text-crayol">Database:</span> PostgreSQL</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Role-based access control for Users, Admins, and Suppliers</li>
                <li>Centralized system for smooth workflow and inventory tracking</li>
                <li>Practical implementation of database systems in real-world scenarios</li>
                <li>Full-stack integration with React, Node.js, and PostgreSQL</li>
              </ol>
            `
  },
  {
    num : 3,
    title: 'Exitor',
    path: '/portfolio/projectsImg/exitor.png',
    repolink: 'https://github.com/Gogul11/Exitor',
    content: `
              <p>
                <span class="text-crayol">Exitor</span> is a lightweight <span class="text-crayol">VI-like text editor</span> built specifically for the <span class="text-crayol">xv6 teaching operating system</span>. 
                It replicates core text editing behaviors using <span class="text-crayol">Insert</span> and <span class="text-crayol">Command modes</span>. 
                Exitor supports essential commands like <span class="text-crayol">:w</span> (save), <span class="text-crayol">:q</span> (quit), 
                <span class="text-crayol">:wq</span> (save and quit), <span class="text-crayol">:y</span> (yank lines), and <span class="text-crayol">:p</span> (paste). 
                Clipboard functionality is implemented via a fixed-size buffer for line-based copy-paste operations.
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">System Calls</h3>
              <ol class="list-disc list-inside">
                <li>User-defined system calls: <span class="text-crayol">xmalloc, xfree, xcalloc, xrealloc</span></li>
                <li>Enable dynamic memory management in xv6, mimicking malloc/calloc-style operations</li>
                <li>Implemented using a header-based allocator and free-list logic</li>
                <li>Additional utilities: <span class="text-crayol">clear()</span> and <span class="text-crayol">hello()</span> system calls</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Enhances xv6 usability with a VI-like editor</li>
                <li>Demonstrates system-level programming skills</li>
                <li>Shows OS modification and user-space utility creation</li>
                <li>Supports dynamic memory management and essential editing commands</li>
              </ol>
            `
  },
  {
    num : 4,
    title: 'Git simulator',
    path: '/portfolio/projectsImg/git-simulator.png',
    repolink: 'https://github.com/Gogul11/GIT-Simulator',
    liveurl: 'https://git-simulator-eight.vercel.app/',
    content: `
              <p>
                A full-stack <span class="text-crayol">Git branching</span> and <span class="text-crayol">commit visualization simulator</span> 
                aimed at helping learners understand internal Git operations interactively. 
                The frontend, built with <span class="text-crayol">React</span> and <span class="text-crayol">Cytoscape.js</span>, 
                offers a dynamic visualization of the <span class="text-crayol">Git DAG (Directed Acyclic Graph)</span>, 
                where users can create commits, form branches, switch between them, and perform merges. 
                Each action is reflected in real-time on the visual graph with color-coded nodes representing commit types 
                (<span class="text-crayol">normal</span>, <span class="text-crayol">branch head</span>, <span class="text-crayol">merge</span>).
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">Backend</h3>
              <ol class="list-disc list-inside">
                <li>Developed in <span class="text-crayol">C++</span> using the <span class="text-crayol">Crow framework</span></li>
                <li>Handles core Git-like logic: commit creation, parent tracking, diff storage, merge conflict-free resolution</li>
                <li>Sessions uniquely managed using IDs for isolated repository environments</li>
                <li>REST APIs enable smooth interaction between frontend and backend</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Frontend</h3>
              <ol class="list-disc list-inside">
                <li>Interactive Git DAG visualization</li>
                <li>Dynamic branch creation, switching, and merging</li>
                <li>Real-time updates with color-coded commit nodes</li>
                <li>Ideal for Git beginners, CS educators, and workshops</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Interactive learning tool for understanding Git internal operations</li>
                <li>Full-stack implementation with React frontend and C++ backend</li>
                <li>Color-coded nodes and dynamic visualization for clear understanding</li>
                <li>Isolated sessions for multiple users</li>
              </ol>
            `
  },
  {
    num : 5,
    title: 'Portfolio',
    path: '/portfolio/projectsImg/portfolio.png',
    repolink: 'https://github.com/Gogul11/portfolio',
    content : `
                <p>
                  My personal portfolio is a creative project built entirely from scratch using React (JSX) and Tailwind CSS. 
                  When I started, I had no fixed design in mind — I just knew I wanted it to be different. 
                  Inspired by the layout of Visual Studio Code, I designed the interface to feel like a developer's workspace: 
                  the sidebar mimics file tabs such as <span class="text-crayol">aboutme.docker</span>, <span class="text-crayol">skills.css</span>, <span class="text-crayol">eca.jsx</span>, resume.pdf, letter of appreciations, and contact.sol, 
                  with each file representing a section of my profile. 
                  The projects section is presented like a folder structure, and a custom carousel highlights the various tools, languages, 
                  and technologies I've used — all represented with meaningful icons. 
                  Choosing the theme was the hardest part. After experimenting with several color palettes, 
                  I finally settled on a style inspired by <span class="text-crayol">Marvel's Black Panther</span>, using black and indigo as primary tones 
                  to create a bold, techy aesthetic. 
                  This portfolio is more than just a site — it reflects how I think as a developer and designer. 
                  And if you have suggestions or feedback, feel free to message me (you can get my social media contacts in the contact section) — I'd love to hear from you!
                </p>

                <h3 class="underline font-semibold m-2 text-crayol">Key Features</h3>
                <ol class="list-disc list-inside">
                  <li>Sidebar mimics file tabs for each section (<span class="text-crayol">aboutme.docker</span>, <span class="text-crayol">skills.css</span>, <span class="text-crayol">eca.jsx</span>, etc.)</li>
                  <li>Projects section presented like a folder structure</li>
                  <li>Custom carousel showcasing tools, languages, and technologies</li>
                  <li>Interactive and visually engaging layout inspired by <span class="text-crayol">VS Code</span></li>
                </ol>

                <h3 class="underline font-semibold m-2 text-crayol">Tech Stack</h3>
                <ol class="list-disc list-inside">
                  <li><span class="text-crayol">React (JSX)</span></li>
                  <li><span class="text-crayol">Tailwind CSS</span></li>
                  <li>Custom components and carousel implementation</li>
                </ol>

                <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
                <ol class="list-disc list-inside">
                  <li>Creative and unique developer-style portfolio design</li>
                  <li>Reflects personal thinking process as a developer and designer</li>
                  <li>Bold, techy aesthetic inspired by <span class="text-crayol">Marvel's Black Panther</span> theme</li>
                </ol>
              `

  },
  {
    num : 6,
    title : 'Oriyam - Land Rental & Leasing Platform',
    path : '/portfolio/projectsImg/oriyam.jpeg',
    repoLink : 'https://github.com/Gogul11/Oriyam',
    content :`
              <p>
                Oriyam is a full-stack land rental and leasing platform that connects 
                <span class="text-crayol">farmers</span> and <span class="text-crayol">landowners</span>, 
                enabling seamless land discovery, deal negotiation, and rental management through web and mobile applications.
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">Key Features</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Landowners:</span> Post land listings, upload images, review requests, and approve or reject deals</li>
                <li><span class="text-crayol">Farmers:</span> Browse lands, view pricing and details, send rental requests, and make payments</li>
                <li><span class="text-crayol">Admin:</span> Manage users, monitor listings, track transactions, and oversee platform activity</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Mobile App:</span> React Native (Expo) + TypeScript</li>
                <li><span class="text-crayol">Admin Dashboard:</span> React + TypeScript</li>
                <li><span class="text-crayol">Backend:</span> Node.js + TypeScript (REST APIs)</li>
                <li><span class="text-crayol">Database:</span> PostgreSQL with Drizzle ORM</li>
                <li><span class="text-crayol">Authentication:</span> JWT-based authentication</li>
                <li><span class="text-crayol">Storage:</span> Cloudflare R2 for image and media storage</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Role-based access for <span class="text-crayol">farmers, landowners, and admins</span></li>
                <li>Secure authentication and structured API design</li>
                <li>Scalable architecture with <span class="text-crayol">PostgreSQL</span></li>
                <li>Clean separation of mobile, admin, and backend services</li>
              </ol>
            `
  },
  {
    num : 7,
    title : 'ORCA - LAN Based Lab Assessment IDE',
    path : '/portfolio/projectsImg/orca.jpeg',
    repoLink : 'https://github.com/Gogul11/ORCA',
    content :`
              <p>
                ORCA is a cross-platform <span class="text-crayol">LAN-based desktop IDE</span> 
                designed for conducting offline lab assessments inside educational institutions. 
                It enables teachers to host assessment rooms, collect student project directories, 
                evaluate submissions, share resources, and communicate in real-time without requiring internet access.
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">Key Features</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Teachers:</span> Host LAN assessment rooms, receive project submissions, evaluate student work, assign marks, and upload reference materials</li>
                <li><span class="text-crayol">Students:</span> Join rooms over LAN, develop projects directly inside the IDE, submit complete project directories, and access shared resources</li>
                <li><span class="text-crayol">Communication:</span> Real-time LAN-based chat system for student interactions and announcements</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Frontend:</span> React + TypeScript</li>
                <li><span class="text-crayol">Desktop Framework:</span> Electron.js</li>
                <li><span class="text-crayol">Backend:</span> Node.js</li>
                <li><span class="text-crayol">Networking:</span> WebSockets over Local Area Network (LAN)</li>
                <li><span class="text-crayol">File Transfer:</span> Local network directory streaming</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Fully offline assessment workflow with <span class="text-crayol">no cloud dependency</span></li>
                <li>Cross-platform support for <span class="text-crayol">Windows, Linux, and macOS</span></li>
                <li>Directory-based project submission and evaluation system</li>
                <li>Integrated IDE, chat, file sharing, and assessment management in a single application</li>
              </ol>
            `
  },
  {
    num : 8,
    title : 'LEW - BLE Based User-Following Bot',
    path : '/portfolio/projectsImg/lew.jpeg',
    repoLink : 'https://github.com/Gogul11/Lew-bot',
    content :`
              <p>
                LEW is a full-stack <span class="text-crayol">BLE-based smart follower robot</span> 
                built using an ESP32, React Native mobile app, and Node.js backend. 
                The system allows users to authenticate, book, pair, and control a mobile bot that follows them 
                dynamically using <span class="text-crayol">Bluetooth Low Energy (BLE) RSSI signal strength</span>.
              </p>

              <h3 class="underline font-semibold m-2 text-crayol">Key Features</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Mobile App:</span> User authentication, QR-based bot selection, BLE pairing, booking flow, and bot control</li>
                <li><span class="text-crayol">Backend:</span> Bot booking, verification, token generation, and user management using REST APIs</li>
                <li><span class="text-crayol">Embedded System:</span> ESP32 firmware with BLE + Wi-Fi communication and RSSI-based motor control</li>
                <li><span class="text-crayol">Smart Following:</span> Dynamic motor speed adjustment based on BLE signal strength to maintain user distance</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-crayol">Mobile App:</span> React Native (Expo) + TypeScript</li>
                <li><span class="text-crayol">Backend:</span> Node.js + Express + MongoDB</li>
                <li><span class="text-crayol">Embedded Firmware:</span> ESP32 Arduino Framework + PlatformIO</li>
                <li><span class="text-crayol">Communication:</span> BLE + Wi-Fi</li>
                <li><span class="text-crayol">Hardware:</span> ESP32, L298N Motor Driver, Dual DC Motors</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-crayol">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>BLE RSSI-based user-following logic with real-time motor speed mapping</li>
                <li>QR-code based bot identification and secure backend verification flow</li>
                <li>Dual control implementations with <span class="text-crayol">manual</span> and <span class="text-crayol">accelerometer-based</span> modes</li>
                <li>Integrated full-stack architecture combining <span class="text-crayol">mobile, backend, and embedded systems</span></li>
              </ol>
            `
  }
];

const ongoingProjects = [
  {
    title: 'PROJECT L',
    desc: 'A personalized AI-AGENT using SLM and improved using RAG',
    width: 40,
  },
];

const challenges = [
    {
        title : 'Challenge 15 - Advice generator',
        repoLink : 'https://github.com/Gogul11/FrontendMentor-Challenge-15',
        siteUrl : 'https://gogul11.github.io/FrontendMentor-Challenge-15/'
    },
    {
        title : 'Challenge 14 - Todo list',
        repoLink : 'https://github.com/Gogul11/FrontendMentor-Challenge-14',
        siteUrl : 'https://gogul11.github.io/FrontendMentor-Challenge-14/'
    },
    {
        title : 'Challenge 13 - Time Tracking Dashboard',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-13',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-13/'
    },
    {
        title : 'Challenge 12 - Tip calculator app',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-12',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-12/'
    },
    {
        title : 'Challenge 11 - Age calculator app',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-11',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-11/'
    },
    {
        title : 'Challenge 10 - Newsletter sign-up form with success message',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-10',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-10/'
    },
    {
        title : 'Challenge 9 - Ping coming soon page',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-9',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-9/'
    },
    {
        title : 'Challenge 8 - Four card feature section',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-8',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-8/'
    },
    {
        title : 'Challenge 7 - Product preview card component',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-7',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-7/'
    },
    {
        title : 'Challenge 6 - 3-column preview card component',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-6',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-6/'
    },
    {
        title : 'Challenge 5 - Results summary component',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-5',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-5/'
    },
    {
        title : 'Challenge 4 - Blog preview card',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-4',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-4/'
    },
    {
        title : 'Challenge 3 - Interactive rating component',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-3',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-3/'
    },
    {
        title : 'Challenge 2 - Frequently Asked Questions',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-2',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-2/'
    },
    {
        title : 'Challenge 1 - Single price grid component',
        repoLink : 'https://github.com/Gogul11/Frontendmentor-challenge-1',
        siteUrl : 'https://gogul11.github.io/Frontendmentor-challenge-1/'
    }
]



export {projectDetails, ongoingProjects, challenges};
