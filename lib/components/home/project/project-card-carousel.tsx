import Image from "next/image";
import Container from "../../container";
import ProjectCard, { ProjectCardProps } from "./project-card";

import classes from "./project-card.module.css";
import { useState } from "react";
import ProjectCardPlaceHolder from "./project-card-placeholder";
import { AnimatePresence, m, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const PROJECTS: ProjectCardProps[] = [
  {
    id: 0,
    title: "Hello",
    image: "",
    link: "instagram.com",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
  {
    id: 1,
    title: "Hello2",
    image: "",
    link: "instagram.com",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
  {
    id: 2,
    title: "Hello3",
    image: "",
    link: "instagram.com",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
];

const INITIAL = { opacity: 0, x: 50 };
const ANIMATE = { opacity: 1, x: 0 };
const EXIT = { opacity: 0, x: -50 };
const TRANSITION = { duration: 0.3 };

export const ProjectCarousel = () => {
  const [currSlide, setCurrSlide] = useState(0);

  return (
    <>
      <Container>
        <h2 className="text-xl font-bold text-white mb-2">Projects</h2>
      </Container>
      <AnimatePresence mode="wait">
        {PROJECTS.map(
          (project) =>
            currSlide === project.id && (
              <motion.div
                key={project.id}
                initial={INITIAL}
                animate={ANIMATE}
                exit={EXIT}
                transition={TRANSITION}
                className={classes.carouselContainer}
              >
                <ProjectCardPlaceHolder />
                <ProjectCard {...project} />
                <ProjectCardPlaceHolder />
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className="flex gap-3 w-full items-center justify-center mt-5">
        {PROJECTS.map((project) => (
          <button
            onClick={() => setCurrSlide(project.id)}
            className={twMerge("h-2 w-2 rounded-xl", project.id === currSlide ? "bg-white" : "bg-white/30")}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
