export type Project = {
  title: string;
  label: string;
  description: string;
  tools: string[];
  focus: string[];
  accent: string;
};

export const profile = {
  name: 'Bintang Atmajaya',
  role: 'Mechanical Engineering Graduate',
  specialty: 'Maintenance & Power Plant Engineering',
  summary:
    'Fresh graduate in Applied Mechanical Engineering from ITS with industrial internship exposure to power plant maintenance and overhaul activities, Liquid Penetrant Testing, and technical engineering projects involving CAD modeling and structural analysis.',
  email: 'bintanglegawa124@gmail.com',
  linkedin: 'https://linkedin.com/in/bintang-atmajaya',
  phone: '08616845805',
};

export const experience = {
  company: 'PT PLN Nusantara Power — UMRO Gresik',
  role: 'Intern — Maintenance, Repair, and Overhaul (MRO)',
  period: 'February 2025 — June 2025',
  description:
    'Gained practical exposure to power plant maintenance and overhaul activities in a combined-cycle power plant (PLTGU) environment.',
  points: [
    'Supported Liquid Penetrant Testing (PT) activities during gas turbine combustion inspection, according to internship-level involvement.',
    'Gained exposure to inspection activities involving gas turbine components.',
    'Learned about maintenance and overhaul workflows, equipment inspection, and the importance of safety and quality procedures.',
    'Observed how maintenance activities are coordinated in an industrial power generation environment.',
  ],
};

export const projects: Project[] = [
  {
    title: 'Negative-Pressure Wall-Climbing Robot',
    label: 'Final Project',
    description: 'Mechanical design project focused on the leg system and timing-belt drive concept of a wall-climbing robot using negative pressure.',
    tools: ['Autodesk Inventor', 'ANSYS / FEA'],
    focus: ['Mechanical design & 3D assembly', 'Timing-belt drive system', 'Structural analysis'],
    accent: 'blue',
  },
  {
    title: 'Centrifugal Pump System & Piping Design',
    label: 'Engineering Project',
    description: 'Engineering project involving the representation and design documentation of a centrifugal pump system using flow diagrams and P&ID.',
    tools: ['AutoCAD', 'AutoCAD Plant 3D'],
    focus: ['PFD & P&ID documentation', 'Piping system design', 'Technical drawings'],
    accent: 'slate',
  },
  {
    title: 'Structural Analysis & Topology Optimization',
    label: 'Analysis Work',
    description: 'Mechanical engineering analysis work involving CAD models and structural simulation to evaluate design performance.',
    tools: ['Autodesk Inventor', 'ANSYS'],
    focus: ['CAD model preparation', 'Finite element analysis', 'Design comparison'],
    accent: 'cyan',
  },
];

export const skillGroups = [
  { title: 'CAD & Mechanical Design', items: ['Autodesk Inventor', 'AutoCAD', 'AutoCAD Plant 3D'] },
  { title: 'Engineering Analysis', items: ['Finite Element Analysis (FEA)', 'ANSYS', 'Topology Optimization'] },
  { title: 'Maintenance & Inspection Exposure', items: ['Power Plant Maintenance & Overhaul', 'Gas Turbine Combustion Inspection', 'Liquid Penetrant Testing (PT)'] },
  { title: 'Mechanical Systems', items: ['Centrifugal Pump Systems', 'Piping System Design', 'PFD and P&ID'] },
  { title: 'Additional Technical Knowledge', items: ['Industrial Pneumatics & Hydraulics', 'ESP32 / Arduino', '3D Printing (PLA+)'] },
];

export const achievements = [
  { title: '4th Standing Champion', detail: 'Futurest National Debate Competition · 2024' },
  { title: 'Selected Grantee', detail: 'Program Ormawa Membangun Negeri (POMN) · 2024' },
];
