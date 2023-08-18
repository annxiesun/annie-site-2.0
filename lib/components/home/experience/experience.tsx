import Image from "next/image";
import Container from "../../container";

import ExperienceCard, { ExperienceCardProps } from "./experience-card";

const EXPERIENCE: ExperienceCardProps[] = [
  {
    company: "Spatial",
    term: "Summer 2023",
    description: "jello",
    logo: "/assets/companies/spatial.jpeg",
    link: "instagram.com",
  },
  {
    company: "Square",
    term: "Fall 2022",
    description: "hello",
    logo: "/assets/companies/square.jpg",
    link: "instagram.com",
  },
  {
    company: "Reekon",
    term: "Winter 2022",
    description: "ejd",
    logo: null,
    link: "instagram.com",
  },
  {
    company: "Enzuzo",
    term: "Summer 2021",
    description: "",
    logo: "/assets/companies/enzuzo.png",
    link: "instagram.com",
  },
];

export const Experience = () => {
  return (
    <>
      <Container>
        <h2 className="text-xl font-bold text-white mb-5">Experience</h2>
        <div className="flex flex-col gap-4">
        {EXPERIENCE.map((experience) => (
          <ExperienceCard {...experience} />
        ))}</div>
      </Container>
    </>
  );
};

export default Experience;
