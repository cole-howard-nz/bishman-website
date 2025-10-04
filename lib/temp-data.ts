
import { Client, Company, Project, Service, Team } from "./types";
export const projects: Project[] = [
  {
    id: 1,
    name: "WQIP Site 6",
    startDate: "May 2021",
    finishDate: "July 2025",
    isComplete: true,
    location: "Wynyard Quarter, Auckland",
    blurb: "Site 6 marks the 3rd stage of the Wynyard Quarter Innovation Precinct (WQIP), a transformative urban regeneration initiative developed for Precinct Properties. This project continues the vision of converting former industrial land into a vibrant, future-focused hub for innovation, business, and sustainability. Bishman Ltd was proud to partner with Hawkins as the electrical contractor for this development. Our team delivered an electrical installation designed to meet the highest standards of energy efficiency and performance. Key features include DALI dimming, automated switching, daylight harvesting, and a Solar PV system targeting an annual power output of 230,000 kWh. The building is also targeting a 5-Star Green Star and NABERSNZ Base Building Energy rating.",
    images: [
      "/projects/wqip1.jpg",
      "/projects/wqip2.jpg",
      "/projects/wqip3.jpg"
    ],
  },
  {
    id: 2,
    name: "Munroe Lane Hub",
    startDate: "March 2021",
    finishDate: "August 2023",
    isComplete: true,
    location: "Albany, Auckland",
    blurb: "6-8 Munroe Lane is a premium commercial office development in Albany, featuring 1.5 basement levels and six floors of A-grade office space. Developed for Asset Plus / Centuria, the building is designed to achieve a 5-Star Green Star rating and includes integrated MCHF works for anchor tenant Auckland Council. Bishman Ltd was proud to support Icon Construction as the electrical contractor for this project. Our team delivered a full electrical installation, including an advanced Zen energy-efficient lighting control system, high-performance LED lighting throughout, and a 1600kVA standby generator integrated with a PLC control system for backup power management. This project showcases our commitment to quality, sustainability, and delivering complex electrical solutions in high-performance commercial environments.",
    images: [
      "/projects/munroe1.jpg",
      "/projects/munroe2.JPEG",
      "/projects/munroe3.JPEG"
    ],
  },
  {
    id: 3,
    name: "University of Auckland RWC",
    startDate: "May 2021",
    finishDate: "July 2025",
    isComplete: true,
    location: "Symonds Street, Auckland",
    blurb: "This is a new award-winning state of the art facility in the heart of the University of Auckland Campus consisting of multi-level sports and wellness spaces for the University students to enjoy. The project consists of over 3000 light fittings all interfacing with a smart lighting control system which adds to the beauty of this building. This project certainly came with its challenges but in true Bishman style we produced an installation we are all very proud of and certainly meets the end Clients expectations.",
    images: [
      "/projects/uoa1.jpg",
      "/projects/uoa2.jpg",
      "/projects/uoa3.jpg",
    ],
  },
  {
    id: 4,
    name: "Aotea Centre",
    startDate: "October 2023",
    finishDate: "March 2025",
    isComplete: true,
    location: "Aotea Square, Auckland",
    blurb: "Text",
    images: [
      "/projects/aotea1.jpg",
      "/projects/aotea2.jpg",
      "/projects/aotea3.jpg"
    ],
  },
  {
    id: 5,
    name: "135 Albert Street, EV",
    startDate: "April 2023",
    finishDate: "November 2023",
    isComplete: false,
    location: "Albert Street, Auckland",
    blurb: "The levels B2/B3 EV Charger project that has been installed for the Auckland Council head office located at 135 Albert St Auckland CBD office consists of approx. 55 Schneider EV Link 7.KW EV Chargers on level B2 and approx. 62 Schneider EV Link 7.KW EV Chargers all complete with a full head end load management system to control the load required for charging such a large amount of EVs. A full new cable management system was installed to take the new cables that were required to reticulate around the existing carparking levels and a new switchboard with a mains power monitoring to interface with the load management system to assist in the control, once all installed the units were fully tested and commissioned and with the assistance of Schneider were put into use and the load management system worked well with the end Clients needs.",
    images: [
      "/projects/albert1.jpg",
      "/projects/albert2.jpg",
      "/projects/albert3.jpg"
    ],
  },
  {
    id: 6,
    name: "Fisher & Paykel Building 4",
    startDate: "April 2018",
    finishDate: "December 2020",
    isComplete: true,
    location: "East Tāmaki, Auckland",
    blurb: "Fisher & Paykel Building 4 - Electrical Installation: The electrical install for Fisher & Paykel Building 4 showcases Daniell Building's commitment to quality, innovation, and reliability. Our team delivered a tailored solution that ensures efficiency, safety, and long-term performance. At Daniell Building, we provide more than just installations. We partner with clients to deliver future-ready electrical systems that support business growth. Our expertise spans power distribution, intelligent lighting, control systems, and energy-efficient solutions, all backed by a proven track record in delivering large-scale commercial projects on time and to the highest standard.",
    images: [
      "/projects/fap1.jpg",
      "/projects/fap2.jpg",
      "/projects/fap3.jpg"
    ],
  }
];

export const services: Service[] = [
  {
    id: 1,
    name: "Commercial Fit-Outs",
    blurb: "Complete electrical fit-outs for offices, shops, and warehouses with minimal downtime.",
  },
  {
    id: 2,
    name: "Switchboard Upgrades",
    blurb: "Upgrade outdated switchboards to meet current safety standards and handle modern load demands.",
  },
  {
    id: 3,
    name: "Lighting Solutions",
    blurb: "Design and install energy-efficient lighting systems tailored to your space and needs.",
  }
];

export const clients: Client[] = [
  {
    id: 1,
    stars: 5,
    name: "Emma Johnson",
    role: "Project Manager",
    company: "Skyline Developments",
    blurb: "Exceptional service from start to finish. The team was professional, efficient, and exceeded our expectations.",
  },
  {
    id: 2,
    stars: 4,
    name: "Liam Patel",
    role: "CTO",
    company: "NextGen Tech",
    blurb: "Great experience overall. Communication was clear and the project was delivered on time.",
  },
  {
    id: 3,
    stars: 5,
    name: "Sophie Chen",
    role: "Interior Designer",
    company: "Chen Interiors",
    blurb: "Highly recommend! Attention to detail and quality of work were outstanding.",
  },
  {
    id: 4,
    stars: 3,
    role: "Operations Manager",
    name: "Noah Smith",
    company: "Apex Logistics",
    blurb: "Good service but a few delays in the timeline. Would still consider for future work.",
  },
  {
    id: 5,
    stars: 5,
    name: "Olivia Williams",
    role: "CEO",
    company: "Greenline Architecture",
    blurb: "Fantastic collaboration. The team brought our vision to life with precision and creativity.",
  },
  {
    id: 6,
    stars: 4,
    name: "Ethan Davis",
    role: "Marketing Director",
    company: "BrightWave Media",
    blurb: "The project turned out great. A few minor revisions were needed, but the end result was worth it.",
  },
  {
    id: 7,
    stars: 5,
    name: "Ava Martinez",
    role: "Founder",
    company: "Urban Eats",
    blurb: "Absolutely loved working with the team. They were responsive, innovative, and delivered beyond expectations.",
  },
  {
    id: 8,
    stars: 4,
    name: "James Wilson",
    role: "Head of Operations",
    company: "Nova Transport",
    blurb: "Strong technical expertise and great communication. We had a few challenges but they handled them well.",
  },
  {
    id: 9,
    stars: 5,
    name: "Mia Thompson",
    role: "Creative Director",
    company: "Thompson Studio",
    blurb: "An outstanding partnership. Their creativity and professionalism elevated our brand to the next level.",
  },
  {
    id: 10,
    stars: 3,
    name: "Benjamin Clark",
    role: "Procurement Officer",
    company: "Summit Enterprises",
    blurb: "The work was solid, but the process could have been smoother. Hoping for improvements in future projects.",
  },
  {
    id: 11,
    stars: 5,
    name: "Isabella Garcia",
    role: "HR Manager",
    company: "Unity Group",
    blurb: "They made the process seamless and stress-free. The results were exactly what we needed.",
  },
  {
    id: 12,
    stars: 4,
    name: "Daniel Lee",
    role: "IT Director",
    company: "Core Systems",
    blurb: "Very capable team with excellent technical knowledge. Some small hiccups, but overall a strong experience.",
  },
];

export const team: Team[] = [
  {
    id: 1,
    name: "Dean Penney",
    role: 'General Manager / Director',
    email: 'dean@bishman.nz',
    blurb: "Dean joined the company in 2018 and has taken responsibility for the dayto-day management of Bishman. Dean has a strong background in quantity surveying and has over 30 years industry experience working with several building companies. Dean brings a proven knowledge of project and cost management, tendering, administration, and support with him which is invaluable to the company. He is actively involved with Master Electricians.",
    image: '/team/default.jpg'
  },
  {
    id: 2,
    name: "Russell Howard",
    role: 'Commercial Manager / Director',
    email: 'russ@bishman.nz',
    blurb: "Russ started with Bishman in 1992 when the company was established. Russ maintains a “hands on” style of management and is well versed in the field of electrical contracting. His experienced approach has assisted in the success of many major projects including the Auckland City Hospital, Vector Arena and the Auckland University Medical School. Recently he completed the National bio lab project in Wellington which ran for an incredible 5 years. Russ is a key member of the Bishman team. He now heads our commercial team and is responsible for all estimation and Design department and is responsible for all tenders, budgets, consultant peer reviews and electrical design. With over 30 years’ experience running Projects.",
    image: '/team/dad.jpg'
  },
  {
    id: 3,
    name: "Regan Caldwell",
    role: 'Contracts Manager',
    email: 'regan@bishman.nz',
    blurb: "Regan has the distinction of being Bishman's first apprentice qualifying for Registration in 1998. After a period of 7 years in Australia gaining invaluable experience, he returned to NZ and become our 3rd Project Manager. His indepth knowledge of contracting procedures has been put to good use in the successful completion of Data centre projects Ra Ora (for IBM) and Forrester (for ANZ). Regan led our Joint Venture interests. He was also the lead in the rollout of UPS and data services for 164 Countdown stores throughout the North & South Islands. Regan has since completed many projects with high praise from builders and clients. Regan is very technical minded and has a high level of expertise in most fields. If he doesn't know about it, he will make a purpose to track it down and understand the method and workings. Regan as later become vice president of Maste Electrician's. Regan has now just become our first ever Contract Manager with the role now overseeing and assisting the business",
    image: '/team/default.jpg'
  },
  {
    id: 4,
    name: "Spencer Snell",
    role: 'Estimator',
    email: 'spencer@bishman.nz',
    blurb: "Spencer joined Bishman in 2003. He very quickly displayed potential for advancement and became Bishman's 4th Project Manager in 2011. Spencer's first project was the complex construction of the ASB Bank's HQ at North Wharf in Auckland's Wynyard Quarter. This project won the prestigious Master Electricians Powerbase Major Project Award, the Philips Lighting Award and the ETCO Master Electricians Excellence Award for the best overall project in New Zealand for 2015. Spencer was also involved in the Forrester Data Centre for ANZ. He completed the new medical manufacturing facility for F&P in Auckland, this won high notability within the industry, with the standard being of the highest possible. Spencer is an avid user of any spreadsheet and schedule document to monitor and gauge project progress and success. This allows him to track any item within any project, this allows huge visibility and control of the project. Spencer has now joined Russ in the commercial team",
    image: '/team/default.jpg'
  },
  {
    id: 5,
    name: "Arjun Gajanand",
    role: 'Service/Project Manager',
    email: "arjun@bishman.nz",
    blurb: "Arjun joined Bishman in 2012. Arjun leads a team of dedicated young people in servicing and small projects. Each member of his team is self-contained regarding their ability to solve and complete problems with at times minimal supervision. All the team have vehicles so then able to respond to any emergency / call out in a speedy fashion. His team are on call 24-7 and are contacted after hours thru the main Bishman phone number. Arjun invests an incredible amount of effort into his role, which shows in the success of the department. Arjuns one down fall is that although a NZ'er he actively supports Australia in cricket, this is not appreciated within the company.",
    image: '/team/default.jpg'
  },
  {
    id: 6,
    name: "Wendy Schmidt",
    role: 'Office Administration Manager',
    blurb: "Wendy joined the Bisham team in 2019. Wendy is the Office Administration Manager, she organiser's all accounts and works along her team in the main office. Wendy is the conduit between the technical team and the administration of the business, organising items and consulting with the Directors, Managers and staff throughout the company dealing with all aspects of the business.",
    email: "wendy@bishman.nz",
    image: '/team/default.jpg'
  },
  {
    id: 7,
    name: "Dwayne Petricevich",
    role: 'Project Manager',
    email: "dwayne@bishman.nz",
    blurb: "Dwayne began his apprenticeship with Bishman in 2009 and has steadily progressed through the company, gaining experience as a registered electrician, site supervisor, and site manager before moving into his current role as project manager. Over the past 16 years he has developed a deep understanding of commercial electrical contracting and is well regarded for his practical, hands-on approach. Dwayne has successfully delivered a wide range of projects, from complex fit-outs to large-scale builds, and his background as a registered electrical inspector ensures that compliance and quality are always at the forefront. He is a key member of the Bishman team, bringing leadership, technical expertise, and a strong focus on client outcomes to every project he manages.",
    image: '/team/default.jpg'
  },
  {
    id: 8,
    name: "Thomas Le Mouton",
    role: 'Project Manager',
    email: "tom@bishman.nz",
    blurb: "Tom began his journey with Bishman's in 2004 as a teenage apprentice and has steadily progressed to his current role as one of our Project Manager's. Over the years, he has gained extensive experience across a wide range of electrical projects, including high-profile developments such as Vector Arena, UoA School of Medicine, North Shore & Middlemore Hospital's, Silverdale Mall and more recently, Munroe Lane council Building in Albany and Precinct Property Buildings and fitout's in Wynyard Quarter. Thomas is known for his calm and friendly approach, and he thrives in collaborative environments. His dedication to learning and growth has been a key part of his success, and he remains passionate about contributing to impactful projects and fostering strong team dynamics.",
    image: '/team/default.jpg'
  },
  {
    id: 9,
    name: "Dorie Santos",
    role: 'Accounts',
    blurb: "Dorie joined Bishman in the autumn of 2013. Dorie always works to her potentials, silently, but meticulously. With more than 35 combined years of work experience in accounting, property management, hospitality industry and administration, Dorie is a key member in the accounts team and constantly happy assisting the project managers and everyone.",
    email: "dorie@bishman.nz",
    image: '/team/default.jpg'
  },
  {
    id: 10,
    name: "Gerry Boniface",
    role: 'Administration',
    email: "gerry@bishman.nz",
    blurb: "Gerry joined Bishman in 2020. Gerry handles numerus jobs from all parties within the office. She is instrumental in the pastel care of the apprentices, with constant contact with them and the training parties. Gerry also assists Wendy in the general account areas and give assistance to Arjun with his constant invoicing",
    image: '/team/default.jpg'
  },
  {
    id: 11,
    name: "Jasee Wong",
    role: 'CAD Draughting',
    email: "jasee@bishman.nz",
    blurb: "Jasee Wong joined Bishman in 2018 and is our CAD Drafting Specialist. Jasee specialises in creating accurate, detailed technical drawings and collaborate with the Bishman team to ensure projects meet the highest standards. Jasee also is involved in the completing essential project handover documents, including Operations & Maintenance (O&M) manuals. Outside of work, Jasee is a cat lover and enjoys reading. Jasee is into tech and is exploring new technology to stay ahead of trends to increase efficiency.",
    image: '/team/default.jpg'
  },
];


export const company: Company[] = [
  {
    id: 1,
    name: "Bishman Limited",
    link: 'https://www.bishman.co.nz',
    image: '/company/bishman_black.svg'
  },
  {
    id: 2,
    name: " J.A. Russell Ltd",
    link: 'https://www.jarussell.co.nz',
    image: '/company/ja_russell.png'
  },
  {
    id: 3,
    name: "Bishman Limited",
    link: 'https://www.bishman.co.nz',
    image: '/company/bishman_black.svg'
  },
  {
    id: 4,
    name: "Bishman Limited",
    link: 'https://www.bishman.co.nz',
    image: '/company/bishman_black.svg'
  },{
    id: 5,
    name: "Bishman Limited",
    link: 'https://www.bishman.co.nz',
    image: '/company/bishman_black.svg'
  }
]