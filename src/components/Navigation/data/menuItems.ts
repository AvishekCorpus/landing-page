import { MenuItem } from "../types/navigation";

export const menuItems: MenuItem[] = [
  {
    name: "About Us",
    route: "/about-us",
    submenu: [
        { name: "About us", route: "/about-us" },
        { name: "Vision & mission", route: "/vision-and-mission" },
    ],
  },
  {
    name: "Divisions",
    route: "/division",
    submenu: [
      {
        name: "Antibiotics",
        route: "/division/antibiotics",
        submenu: [
          { name: "Oral", route: "/division/antibiotics/oral" },
          { name: "Injectable", route: "/division/antibiotics/injectable" },
          { name: "Topical", route: "/division/antibiotics/topical" },
        ],
      },
      {
        name: "Anti Antibiotic / Anti Allergic",
        route: "/division/anti-allergic",
      },
      { name: "Anti Cold", route: "/division/anti-cold" },
      { name: "Antacid + PPI", route: "/division/antacid-ppi" },
      { name: "Appetizer", route: "/division/appetizer" },
      { name: "Enzymes & Pre-Probiotics", route: "/division/enzymes" },
      { name: "Anti Inflammatory", route: "/division/anti-inflammatory" },
      { name: "Corticosteroids", route: "/division/corticosteroids" },
      { name: "Neuro / CNS", route: "/division/neuro-cns" },
    ],
  },
  { name: "Events", route: "/events" },
  {
    name: "Life at Corpus",
    route: "/life-at-corpus",
    submenu: [
      { name: "Life at Corpus", route: "/life-at-corpus/index"},
      { name: "Team Corpus", route: "/life-at-corpus/team" },
      { name: "Work with us", route: "/life-at-corpus/work-with-us" },
      { name: "Training & Development", route: "/life-at-corpus/training" },
    ],
  },
  { name: "Contact", route: "/contact" },
];
