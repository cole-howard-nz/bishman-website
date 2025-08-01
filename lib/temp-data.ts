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
  },
  {
    id: 5,
    name: "AI Chatbot Integration",
    startDate: "2025-04-05",
    isComplete: false,
    location: "Dunedin, NZ",
    blurb: "Integrating an AI-powered chatbot to handle customer support queries."
  },
  {
    id: 6,
    name: "Cloud Infrastructure Setup",
    startDate: "2025-01-15",
    finishDate: "2025-02-28",
    isComplete: true,
    location: "Hamilton, NZ",
    blurb: "Deployed scalable cloud infrastructure using AWS for better availability."
  },
  {
    id: 7,
    name: "Employee Training Portal",
    startDate: "2025-03-22",
    isComplete: false,
    location: "Tauranga, NZ",
    blurb: "Developing an internal web portal for staff onboarding and training."
  },
  {
    id: 8,
    name: "Cybersecurity Audit",
    startDate: "2025-02-01",
    finishDate: "2025-02-18",
    isComplete: true,
    location: "Napier, NZ",
    blurb: "Comprehensive audit of internal systems to identify and patch vulnerabilities."
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
    blurb: "Over 8 years of hands-on experience with residential and commercial electrical systems.",
  },
  {
    id: 2,
    name: "Sarah Lin",
    role: Role.Office,
    blurb: "Coordinates day-to-day operations with a background in administrative management and logistics.",
  },
  {
    id: 3,
    name: "Mark Patel",
    role: Role.Management,
    blurb: "Leads with over 15 years of industry leadership in electrical and infrastructure projects.",
  },
  {
    id: 4,
    name: "Emily Nguyen",
    role: Role.Electrician,
    blurb: "Specializes in smart home systems and energy-efficient electrical solutions.",
  },
  {
    id: 5,
    name: "James Walker",
    role: Role.Management,
    blurb: "Brings a decade of project oversight, focusing on safety and timely delivery.",
  },
];
