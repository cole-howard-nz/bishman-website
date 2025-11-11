
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
    blurb: "The Aotea Centre Ribbon Lighting Project was a project that consists of approx. 480 individual colour changing LED strip lights all DMX controlled to create all sorts of light sequences on the newly installed white aluminum fins that stand tall above the front of the Aotea Centre. All light cables were home runs back to approx. 12 control chambers that sit on the roof of the Aotea Centre, this was a challenge as the panels required to be non visible when stood in front of the Aotea Centre. All works and the full installation was outside, so everything had to be perfect and suitable for the outdoor conditions. The Client was very happy with the final results, the colour changing LEDS illuminate/feature most nights outside of the Aotea Centre.",
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
    blurb: "Dean joined Bishman in 2018 as General Manager, overseeing day-to-day operations. With over 30 years of industry experience and expertise in quantity surveying, project management, and operational leadership, he drives the company’s continued success. He is actively involved with Master Electricians.",
    image: '/team/dean.jpg'
  },
  {
    id: 2,
    name: "Russell Howard",
    role: 'Commercial Manager / Director',
    email: 'russ@bishman.nz',
    blurb: "Russ has been with Bishman since 1992 and leads the commercial team, overseeing estimation, design, tenders, budgets, and electrical design. With over 30 years of experience, he has delivered major projects such as Auckland City Hospital, Vector Arena, and the National Bio Lab.",
    image: '/team/russell.jpg'
  },
  {
    id: 3,
    name: "Regan Caldwell",
    role: 'Contracts Manager',
    email: 'regan@bishman.nz',
    blurb: "Regan was Bishman's first registered apprentice in 1998. After gaining experience in Australia, he returned as Project Manager, delivering projects including Ra Ora and Forrester Data Centres and overseeing the rollout of UPS and data services to 164 Countdown stores. Regan is now Bishman's Contracts Manager and is the current President of Master Electricians Auckland Branch.",
    image: '/team/regan.jpg'
  },
  {
    id: 4,
    name: "Spencer Snell",
    role: 'Estimator',
    email: 'spencer@bishman.nz',
    blurb: "Spencer joined Bishman in 2003 and became the fourth Project Manager in 2011. He has led award-winning projects including ASB Bank HQ, F&amp;P Medical Manufacturing Facility, and the Forrester Data Centre for ANZ. He now contributes to the commercial team, supporting estimation, design, and project oversight.",
    image: '/team/spencer.jpg'
  },
  {
    id: 5,
    name: "Arjun Gajanand",
    role: 'Service & Project Manager',
    email: "arjun@bishman.nz",
    blurb: "Arjun joined Bishman in 2012 and leads a team of skilled service and project professionals. His team operates 24/7, responding quickly to emergencies, and consistently delivers high-quality results. Arjun's dedication and leadership have been key to the department's success.",
    image: '/team/arjun.jpg'
  },
  {
    id: 6,
    name: "Wendy Schmidt",
    role: 'Office Administration Manager',
    blurb: "Wendy joined Bishman in 2019 as Office Administration Manager. She oversees accounts, coordinates administrative functions, and ensures smooth communication between teams, Directors, and staff, playing a vital role in the company's operations.",
    email: "wendy@bishman.nz",
    image: '/team/default.jpg'
  },
  {
    id: 7,
    name: "Dwayne Petricevich",
    role: 'Project Manager',
    email: "dwayne@bishman.nz",
    blurb: "Dwayne began his apprenticeship with Bishman in 2009 and has progressed to Project Manager, bringing over 16 years of commercial electrical contracting experience. Known for his hands-on approach and technical expertise as a registered electrical inspector, he consistently delivers projects to the highest standards, prioritising compliance, quality, and client outcomes.",
    image: '/team/dwayne.jpg'
  },
  {
    id: 8,
    name: "Thomas Le Mouton",
    role: 'Project Manager',
    email: "tom@bishman.nz",
    blurb: "Tom joined Bishman in 2004 as an apprentice and has progressed to Project Manager, delivering a wide range of high-profile projects including Vector Arena, University of Auckland School of Medicine, and Wynyard Quarter fit-outs. Known for his calm, collaborative approach, Tom combines technical expertise with strong team leadership to ensure successful project delivery.",
    image: '/team/thomas.jpg'
  },
  {
    id: 9,
    name: "Dorie Santos",
    role: 'Accounts',
    blurb: "Dorie has been a valued member of Bishman's accounts team since 2013. With over 35 years of experience in accounting, property management, hospitality, and administration, she provides essential support to project managers and colleagues, ensuring efficient operations.",
    email: "dorie@bishman.nz",
    image: '/team/dorie.jpg'
  },
  {
    id: 10,
    name: "Gerry Boniface",
    role: 'Administration',
    email: "gerry@bishman.nz",
    blurb: "Gerry joined Bishman in 2020 and supports the office team across accounts, invoicing, and apprentice care. Her versatility and dedication ensure smooth operations and strong support for both staff and project teams.",
    image: '/team/gerry.jpg'
  },
  {
    id: 11,
    name: "Jasee Wong",
    role: 'CAD Draughting',
    email: "jasee@bishman.nz",
    blurb: "Jasee Wong joined Bishman in 2018 as CAD Drafting Specialist. She produces precise technical drawings and completes prepares essential project administrative functions and documentation, leveraging emerging technologies to enhance project efficiency and quality.",
    image: '/team/jasee.jpg'
  },
];


export const company: Company[] = [
  {
    id: 1,
    name: "Zumtobel",
    link: 'https://www.zumtobel.com/com-en/index.html',
    image: '/company/ZUM.png'
  },
  {
    id: 2,
    name: "OSL Data",
    link: 'https://osldata.co.nz',
    image: '/company/OSL.png'
  },
  {
    id: 2,
    name: " J.A. Russell Ltd",
    link: 'https://www.jarussell.co.nz',
    image: '/company/ja_russell.png'
  },
  {
    id: 3,
    name: "legrand",
    link: 'https://www.legrand.com/en',
    image: '/company/legrand.png'
  },
  {
    id: 4,
    name: "LECO",
    link: 'https://www.lecoswitchgear.co.nz',
    image: '/company/LECO.png'
  },
  {
    id: 5,
    name: "BDR",
    link: 'https://www.bdrsecurity.co.nz',
    image: '/company/BDR.avif'
  },
  {
    id: 6,
    name: "Atkore",
    link: 'https://atkore.com',
    image: '/company/atkore.png'
  },
  {
    id: 7,
    name: "IE",
    link: 'https://www.intelligentenvironments.co.nz',
    image: '/company/IE.png'
  },
  {
    id: 8,
    name: "MSS",
    link: 'https://www.mechanicalsupport.co.nz',
    image: '/company/MSS.png'
  },
  {
    id: 9,
    name: "CMS Electra",
    link: 'https://cmselectra.com/nz',
    image: '/company/CMS.png'
  },
  {
    id: 10,
    name: "Direct Control",
    link: 'https://www.directcontrol.nz/?utm_source=bishman_website&utm_medium=partner_logo',
    image: '/company/DC.png'
  },
  {
    id: 11,
    name: "KSM",
    link: 'https://ksm.co.nz',
    image: '/company/KSM.png'
  },
]