import Container from "../../container";
import ProjectCard, { ProjectCardProps } from "./project-card";

import classes from "./project-card.module.css";
import { useCallback, useEffect, useState } from "react";
import ProjectCardPlaceHolder from "./project-card-placeholder";
import { AnimatePresence, motion } from "framer-motion";
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

const variants = {
  enter: () => {
    return {
      x: 50,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      x: -50,
      opacity: 0,
    };
  },
};

let rotate_id = null;
export const ProjectCarousel = () => {
  const [currSlide, setCurrSlide] = useState({
    locked: false,
    slide: 0,
  });
  const [rotating, setRotating] = useState(true);
  const timeout = useCallback(() => {
    setCurrSlide((prev) => {
      if (prev.locked) return prev;
      if (prev.slide == PROJECTS.length - 1)
        return {
          locked: false,
          slide: 0,
        };
      return {
        locked: false,
        slide: prev.slide + 1,
      };
    });
  }, []);

  useEffect(() => {
    const rotate = setInterval(timeout, 2000);
    rotate_id = rotate;

    return () => {
      clearInterval(rotate);
    };
  }, []);

  useEffect(() => {
    if (!rotating) clearInterval(rotate_id);
  }, [rotating]);

  const onClickSelector = useCallback((i: number) => {
    if (rotating) setRotating(false);
    if (!currSlide.locked) {
      setCurrSlide({
        slide: i,
        locked: false,
      });
    }
  }, []);

  return (
    <>
      <Container>
        <h2 className="text-xl font-bold text-white mb-2">Projects</h2>
      </Container>
      <div className="relative w-full max-w-[800px] mx-auto">
        <div className="w-full h-[300px]"/>
        <AnimatePresence mode="wait">
          <motion.div
            key={currSlide.slide}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.2 },
            }}
            className={classes.carouselContainer}
          >
            <ProjectCardPlaceHolder />
            <ProjectCard {...PROJECTS[currSlide.slide]} />
            <ProjectCardPlaceHolder />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-3 w-full items-center justify-center mt-5">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            className={twMerge(
              "h-2 w-2 rounded-xl",
              project.id === currSlide.slide ? "bg-white" : "bg-white/30"
            )}
            onClick={useCallback(() => onClickSelector(project.id), [])}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
