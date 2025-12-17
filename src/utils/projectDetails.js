
const projectDetails = [
  {
    num : 1,
    title: 'Supermarket Billing System',
    path: '/portfolio/projectsImg/supermarket.png',
    repolink: 'https://github.com/Gogul11/SuperMarketBillingSystem',
    content: `
              <p>
                A full-stack <span class="text-blue-500">billing system</span> built with the <span class="text-blue-500">MERN stack</span> 
                (<span class="text-blue-500">MongoDB</span>, <span class="text-blue-500">Express.js</span>, <span class="text-blue-500">React.js</span>, <span class="text-blue-500">Node.js</span>) 
                to streamline the supermarket checkout process. 
                It supports secure staff login via <span class="text-blue-500">JWT</span>, dynamic inventory management (add, update, delete products), 
                and real-time billing with total price calculations and discounts. 
                The system enables bill generation, printing, and maintains transaction records for reporting. 
              </p>

              <h3 class="underline font-semibold m-2 text-blue-500">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-blue-500">Frontend:</span> React.js</li>
                <li><span class="text-blue-500">Backend:</span> Node.js + Express.js</li>
                <li><span class="text-blue-500">Database:</span> MongoDB</li>
                <li><span class="text-blue-500">Authentication:</span> JWT</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Features</h3>
              <ol class="list-disc list-inside">
                <li>Secure staff login and role-based access</li>
                <li>Dynamic inventory management (add, update, delete products)</li>
                <li>Real-time billing with total price calculations and discounts</li>
                <li>Bill generation, printing, and transaction record keeping</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Highlights</h3>
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
                A full-stack web application designed to manage <span class="text-blue-500">spare parts inventory</span> 
                with role-based access for <span class="text-blue-500">Users, Admins, and Suppliers</span>. 
                Users can browse and order spare parts, Admins manage inventory, users, suppliers, and categories, 
                while Suppliers update and maintain part listings. 
                The application ensures smooth workflow and inventory tracking through a centralized system.
              </p>

              <h3 class="underline font-semibold m-2 text-blue-500">Roles & Features</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-blue-500">Users:</span> Browse and order spare parts</li>
                <li><span class="text-blue-500">Admins:</span> Manage inventory, users, suppliers, and categories</li>
                <li><span class="text-blue-500">Suppliers:</span> Update and maintain part listings</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-blue-500">Frontend:</span> React</li>
                <li><span class="text-blue-500">Backend:</span> Node.js</li>
                <li><span class="text-blue-500">Database:</span> PostgreSQL</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Highlights</h3>
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
                <span class="text-blue-500">Exitor</span> is a lightweight <span class="text-blue-500">VI-like text editor</span> built specifically for the <span class="text-blue-500">xv6 teaching operating system</span>. 
                It replicates core text editing behaviors using <span class="text-blue-500">Insert</span> and <span class="text-blue-500">Command modes</span>. 
                Exitor supports essential commands like <span class="text-blue-500">:w</span> (save), <span class="text-blue-500">:q</span> (quit), 
                <span class="text-blue-500">:wq</span> (save and quit), <span class="text-blue-500">:y</span> (yank lines), and <span class="text-blue-500">:p</span> (paste). 
                Clipboard functionality is implemented via a fixed-size buffer for line-based copy-paste operations.
              </p>

              <h3 class="underline font-semibold m-2 text-blue-500">System Calls</h3>
              <ol class="list-disc list-inside">
                <li>User-defined system calls: <span class="text-blue-500">xmalloc, xfree, xcalloc, xrealloc</span></li>
                <li>Enable dynamic memory management in xv6, mimicking malloc/calloc-style operations</li>
                <li>Implemented using a header-based allocator and free-list logic</li>
                <li>Additional utilities: <span class="text-blue-500">clear()</span> and <span class="text-blue-500">hello()</span> system calls</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Highlights</h3>
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
                A full-stack <span class="text-blue-500">Git branching</span> and <span class="text-blue-500">commit visualization simulator</span> 
                aimed at helping learners understand internal Git operations interactively. 
                The frontend, built with <span class="text-blue-500">React</span> and <span class="text-blue-500">Cytoscape.js</span>, 
                offers a dynamic visualization of the <span class="text-blue-500">Git DAG (Directed Acyclic Graph)</span>, 
                where users can create commits, form branches, switch between them, and perform merges. 
                Each action is reflected in real-time on the visual graph with color-coded nodes representing commit types 
                (<span class="text-blue-500">normal</span>, <span class="text-blue-500">branch head</span>, <span class="text-blue-500">merge</span>).
              </p>

              <h3 class="underline font-semibold m-2 text-blue-500">Backend</h3>
              <ol class="list-disc list-inside">
                <li>Developed in <span class="text-blue-500">C++</span> using the <span class="text-blue-500">Crow framework</span></li>
                <li>Handles core Git-like logic: commit creation, parent tracking, diff storage, merge conflict-free resolution</li>
                <li>Sessions uniquely managed using IDs for isolated repository environments</li>
                <li>REST APIs enable smooth interaction between frontend and backend</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Frontend</h3>
              <ol class="list-disc list-inside">
                <li>Interactive Git DAG visualization</li>
                <li>Dynamic branch creation, switching, and merging</li>
                <li>Real-time updates with color-coded commit nodes</li>
                <li>Ideal for Git beginners, CS educators, and workshops</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Highlights</h3>
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
                  the sidebar mimics file tabs such as <span class="text-blue-500">aboutme.docker</span>, <span class="text-blue-500">skills.css</span>, <span class="text-blue-500">eca.jsx</span>, resume.pdf, letter of appreciations, and contact.sol, 
                  with each file representing a section of my profile. 
                  The projects section is presented like a folder structure, and a custom carousel highlights the various tools, languages, 
                  and technologies I've used — all represented with meaningful icons. 
                  Choosing the theme was the hardest part. After experimenting with several color palettes, 
                  I finally settled on a style inspired by <span class="text-blue-500">Marvel's Black Panther</span>, using black and indigo as primary tones 
                  to create a bold, techy aesthetic. 
                  This portfolio is more than just a site — it reflects how I think as a developer and designer. 
                  And if you have suggestions or feedback, feel free to message me (you can get my social media contacts in the contact section) — I'd love to hear from you!
                </p>

                <h3 class="underline font-semibold m-2 text-blue-500">Key Features</h3>
                <ol class="list-disc list-inside">
                  <li>Sidebar mimics file tabs for each section (<span class="text-blue-500">aboutme.docker</span>, <span class="text-blue-500">skills.css</span>, <span class="text-blue-500">eca.jsx</span>, etc.)</li>
                  <li>Projects section presented like a folder structure</li>
                  <li>Custom carousel showcasing tools, languages, and technologies</li>
                  <li>Interactive and visually engaging layout inspired by <span class="text-blue-500">VS Code</span></li>
                </ol>

                <h3 class="underline font-semibold m-2 text-blue-500">Tech Stack</h3>
                <ol class="list-disc list-inside">
                  <li><span class="text-blue-500">React (JSX)</span></li>
                  <li><span class="text-blue-500">Tailwind CSS</span></li>
                  <li>Custom components and carousel implementation</li>
                </ol>

                <h3 class="underline font-semibold m-2 text-blue-500">Highlights</h3>
                <ol class="list-disc list-inside">
                  <li>Creative and unique developer-style portfolio design</li>
                  <li>Reflects personal thinking process as a developer and designer</li>
                  <li>Bold, techy aesthetic inspired by <span class="text-blue-500">Marvel's Black Panther</span> theme</li>
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
                <span class="text-blue-500">farmers</span> and <span class="text-blue-500">landowners</span>, 
                enabling seamless land discovery, deal negotiation, and rental management through web and mobile applications.
              </p>

              <h3 class="underline font-semibold m-2 text-blue-500">Key Features</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-blue-500">Landowners:</span> Post land listings, upload images, review requests, and approve or reject deals</li>
                <li><span class="text-blue-500">Farmers:</span> Browse lands, view pricing and details, send rental requests, and make payments</li>
                <li><span class="text-blue-500">Admin:</span> Manage users, monitor listings, track transactions, and oversee platform activity</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Tech Stack</h3>
              <ol class="list-disc list-inside">
                <li><span class="text-blue-500">Mobile App:</span> React Native (Expo) + TypeScript</li>
                <li><span class="text-blue-500">Admin Dashboard:</span> React + TypeScript</li>
                <li><span class="text-blue-500">Backend:</span> Node.js + TypeScript (REST APIs)</li>
                <li><span class="text-blue-500">Database:</span> PostgreSQL with Drizzle ORM</li>
                <li><span class="text-blue-500">Authentication:</span> JWT-based authentication</li>
                <li><span class="text-blue-500">Storage:</span> Cloudflare R2 for image and media storage</li>
              </ol>

              <h3 class="underline font-semibold m-2 text-blue-500">Highlights</h3>
              <ol class="list-disc list-inside">
                <li>Role-based access for <span class="text-blue-500">farmers, landowners, and admins</span></li>
                <li>Secure authentication and structured API design</li>
                <li>Scalable architecture with <span class="text-blue-500">PostgreSQL</span></li>
                <li>Clean separation of mobile, admin, and backend services</li>
              </ol>
            `
}
];

const ongoingProjects = [
  {
    title: 'Orca',
    desc: 'Collabrative IDE for lab exams. About to be deployed',
    width: 85,
  },
  {
    title: 'Cloth Store',
    desc: 'A small e-commerce site for selling cloths aimed for small scale business',
    width: 50,
  },
  {
    title : 'Stdent understanding analysis system',
    desc : 'A system to analyse students understanding level based on their subjects using NLP techniques and about to be implemented',
    width : 5,
  }
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
