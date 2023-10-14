import Image from "next/image";
import Container from "../../container";
import ProjectCard, { ProjectCardProps } from "./project-card";

import classes from "./project-card.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import ProjectCardPlaceHolder from "./project-card-placeholder";
import { AnimatePresence, m, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const PROJECTS: ProjectCardProps[] = [
  {
    id: 0,
    title: "Keylime - Recreating React",
    image: "/assets/projects/keylime.png",
    link: "/writing/recreating-react-from-scratch",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
  {
    id: 1,
    title: "Media Generation Mindmap",
    image: "/assets/projects/mediagen.png",
    link: "writing/social-media-post-generation",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
  {
    id: 2,
    title: "Koi UI - Mobile UI Library",
    image: "/assets/projects/koi-ui.png",
    link: "writing/designing-for-mobile-first",
    description: "My UI Library",
  },
];

const INITIAL = { opacity: 0, x: 50 };
const ANIMATE = { opacity: 1, x: 0 };
const EXIT = { opacity: 0, x: -50 };
const TRANSITION = { duration: 0.3 };

var interval;

export const ProjectCarousel = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const timeout = useCallback(() => {
    setCurrSlide((prev) => {
      if (prev >= PROJECTS.length - 1) return 0;
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    const rotate = setInterval(timeout, 3000);
    return () => {
      clearInterval(rotate);
    };
  }, []);

  const Projects = () =>
    PROJECTS.map((project) => {
      return (
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
      );
    });

  return (
    <>
      <Container>
        <h2 className="text-xl font-bold text-white mb-2">Projects</h2>
      </Container>
      <AnimatePresence mode="wait">{Projects()}</AnimatePresence>
      <div className="flex gap-3 w-full items-center justify-center mt-5">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            className={twMerge(
              "h-2 w-2 rounded-xl",
              project.id === currSlide ? "bg-white" : "bg-white/30"
            )}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
