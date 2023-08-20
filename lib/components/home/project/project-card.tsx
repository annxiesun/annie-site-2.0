import Image from "next/image";
import classes from "./project-card.module.css";
import clsx from "clsx";
import { m, motion } from "framer-motion";

export type ProjectCardProps = {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
};

const INITIAL = { opacity: 0, x: 50}
const ANIMATE = { opacity: 1, x: 0 }
const TRANSITION = { duration: 0.3 }

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, link, description, image } = props;
  return (
      <a className={classes.projectCard} href={link}>
        <div className="absolute w-full h-full max-w-[800px] hover:bg-black/50 transition-colors duration-200 top-0 left-0" />
        <Image
          className="w-full h-[200px] object-cover object-top mb-2 rounded-sm"
          src={image}
          alt={""}
          width={300}
          height={200}
        />
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-white text-sm h-10 overflow-hidden text-ellipsis">{description}</p>
      </a>
  );
};

export default ProjectCard;
