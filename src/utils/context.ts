import { ProjectTableType, SkillsContextType } from "../types/globalTypes";
import projImg1 from "../assets/img/bethehero.png";
import projImg2 from "../assets/img/ecoleta.png";
import projImg3 from "../assets/img/podcastr.png";
import projImg4 from "../assets/img/proffy.png";
import projImg5 from "../assets/img/terrainp5.png";
import projImg6 from "../assets/img/libproject.png";
import projImg7 from "../assets/img/plant.png";
import projImg8 from "../assets/img/coffe.png";
import projImg9 from "../assets/img/pricing.png";
import projImg10 from "../assets/img/nlwcopa.png";

export const skillsContext: SkillsContextType[] = [
  {
    id: 1,
    title: "React",
    content: "Dynamic application development, modularization and componentization, with cloud integration and back-end requests."
  },
  {
    id: 2,
    title: "React Native",
    content: "Development of mobile applications in online events, such as Next Level Week and OmniStack Week offered by @Rocketseat"
  },
  {
    id: 3,
    title: "JavaScript",
    content: "Development of applications and logic, using in several projects, creating functions and getting the most out of the language."
  },
  {
    id: 4,
    title: "C#",
    content: "Development of complete solutions, using .NET and Entity Framework, with database integrations and layered divisions."
  },
  {
    id: 5,
    title: "Java",
    content: "Development of personal projects, exercises from courses made by @Udemy and OOP projects at college."
  },
  {
    id: 6,
    title: "TypeScript",
    content: "Using in several projects always aiming to keep them well structured and typed. Project standardization and more."
  },
  {
    id: 7,
    title: "Python",
    content: "Data analysis, systems monitoring and flow control projects. College homework solving and more."
  },
  {
    id: 8,
    title: "PostgresSQL",
    content: "Use of database for information storage, data warehouse, triggers and connection with applications"
  }
]

export const projectsMainTable: ProjectTableType[] = [
  {
    title: "Be The Hero",
    description: "Development, React, React Native",
    imgUrl: projImg1,
    link: "https://github.com/NatanBB/Be-The-Hero"
  },
  {
    title: "Ecoleta",
    description: "Development, React, React Native",
    imgUrl: projImg2,
    link: "https://github.com/NatanBB/Ecoleta"
  },
  {
    title: "Proffy",
    description: "Development, React",
    imgUrl: projImg4,
    link: "https://github.com/NatanBB/Proffy"
  },
  {
    title: "Lib Project",
    description: "Development, React",
    imgUrl: projImg6,
    link: "https://github.com/NatanBB/libproject"
  },
  {
    title: "Terrain Generator",
    description: "Development, JavaScript, P5",
    imgUrl: projImg5,
    link: "https://github.com/NatanBB/TerrainP5"
  },
  {
    title: "Nlw Copa",
    description: "Development, React, ReactNative, OAuth, Expo",
    imgUrl: projImg10,
    link: "https://github.com/NatanBB/NLW-COPA"
  },
];

export const projectsSecondTable: ProjectTableType[] = [
  {
    title: "Plant Manager",
    description: "Development, React Native",
    imgUrl: projImg7,
    link: "https://github.com/NatanBB/PlantManager"
  },
  {
    title: "Rocket Coffe",
    description: "Development, JavaScript",
    imgUrl: projImg8,
    link: "https://github.com/NatanBB/RocketCoffee"
  },
  {
    title: "Princing Table",
    description: "Development, JavaScript",
    imgUrl: projImg9,
    link: "https://github.com/NatanBB/PricingTable"
  },
  {
    title: "Podcastr",
    description: "Development, React",
    imgUrl: projImg3,
    link: "https://github.com/NatanBB/Podcastr"
  }
];