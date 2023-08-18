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
        <Image
          className="w-full h-[200px]"
          src={image}
          alt={""}
          width={300}
          height={200}
        />
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </a>
  );
};

export default ProjectCard;
