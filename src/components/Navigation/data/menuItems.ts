import type { MenuItem } from "../types/navigation";

export const menuItems: MenuItem[] = [
  // {
  //   name: "Divisions",
  //   route: "/division",
  //   submenu: [
  //     {
  //       name: "Antibiotics",
  //       route: "/division/Antibiotics",
  //     },
  //     {
  //       name: "Anti Antibiotic / Anti Allergic",
  //       route: "/division/Anti Asthmatic - Anti Allergic",
  //     },
  //     { name: "Anti Cold", route: "/division/Anti-cold" },
  //     { name: "Antacid + PPI", route: "/division/Antacid-ppi" },
  //     { name: "Appetizer", route: "/division/Appetizer" },
  //     { name: "Anti-Inflammatory", route: "/division/Anti-Inflammatory" },
  //     { name: "Corticosteroids", route: "/division/Corticosteroids" },
  //     { name: "Neuro / CNS", route: "/division/Neuro-CNS" },
  //     { name: "Nutraceuticals", route: "/division/Nutraceuticals" },
  //     { name: "Anti Diabetic", route: "/division/Anti Diabetic" },
  //     { name: "Anti Hypertensive", route: "/division/Anti Hypertensive" },
  //     { name: "Hepatoprotective", route: "/division/Hepatoprotective" },
  //     { name: "Nephroprotective", route: "/division/Nephroprotective" },
  //     { name: "Anti-Emetic (Pregnancy)", route: "/division/Anti-Emetic (Pregnancy)" },
  //     { name: "Calcium & Haematinics", route: "/division/Calcium & Haematinics" },
  //     { name: "Alkaliser", route: "/division/Alkaliser" },
  //     { name: "Enzymes & Pre-Probiotics", route: "/division/Enzymes & Pre-Probiotics" },
  //   ],
  // },

  {
    name: "Life at Corpus",
    route: "/life-at-corpus",
    submenu: [
      { name: "Life at Corpus", route: "/life-at-corpus" },
      { name: "Team Corpus", route: "/life-at-corpus/team" },
      { name: "Work with us", route: "/life-at-corpus/work-with-us" },
      { name: "Training & Development", route: "/life-at-corpus/training" },
    ],
  },
  {
    name: "About Us",
    route: "/about-us",
    submenu: [
      { name: "About us", route: "/about-us" },
      { name: "Vision & mission", route: "/vision-and-mission" },
    ],
  },
  { name: "Events", route: "/events" },
  { name: "Contact", route: "/contact" },
];
