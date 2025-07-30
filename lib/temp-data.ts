// Mostly AI generated

import { Client, Project, Role, Service, Team } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    startDate: "2025-01-10",
    finishDate: "2025-02-15",
    isComplete: true,
    location: "Auckland, NZ",
    blurb: "A complete visual and UX overhaul of the company's main website."
  },
  {
    id: 2,
    name: "Mobile App Development",
    startDate: "2025-03-01",
    isComplete: false,
    location: "Wellington, NZ",
    blurb: "Developing a cross-platform mobile app to support our web services."
  },
  {
    id: 3,
    name: "Database Migration",
    startDate: "2025-02-20",
    finishDate: "2025-03-10",
    isComplete: true,
    location: "Christchurch, NZ",
    blurb: "Migrated legacy data to a modern, scalable PostgreSQL database."
  },
  {
    id: 4,
    name: "Marketing Campaign",
    startDate: "2025-03-15",
    isComplete: false,
    location: "Remote",
    blurb: "Launching a targeted campaign across social and search platforms."
  }
]

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
  }
];

export const clients: Client[] = [
  {
    id: 1,
    stars: 5,
    name: "Emma Johnson",
    company: "Skyline Developments",
    blurb: "Exceptional service from start to finish. The team was professional, efficient, and exceeded our expectations.",
  },
  {
    id: 2,
    stars: 4,
    name: "Liam Patel",
    company: "NextGen Tech",
    blurb: "Great experience overall. Communication was clear and the project was delivered on time.",
  },
  {
    id: 3,
    stars: 5,
    name: "Sophie Chen",
    company: "Chen Interiors",
    blurb: "Highly recommend! Attention to detail and quality of work were outstanding.",
  },
  {
    id: 4,
    stars: 3,
    name: "Noah Smith",
    company: "Apex Logistics",
    blurb: "Good service but a few delays in the timeline. Would still consider for future work.",
  },
  {
    id: 5,
    stars: 5,
    name: "Olivia Williams",
    company: "Greenline Architecture",
    blurb: "Fantastic collaboration. The team brought our vision to life with precision and creativity.",
  },
];


export const team: Team[] = [
  {
    id: 1,
    name: "Jake Thomson",
    role: Role.Electrician,
  },
  {
    id: 2,
    name: "Sarah Lin",
    role: Role.Office,
  },
  {
    id: 3,
    name: "Mark Patel",
    role: Role.Management,
  },
  {
    id: 4,
    name: "Emily Nguyen",
    role: Role.Electrician,
  },
  {
    id: 5,
    name: "James Walker",
    role: Role.Management,
  },
];