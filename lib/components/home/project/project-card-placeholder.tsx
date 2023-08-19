import Image from "next/image";
import classes from "./project-card.module.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const ProjectCardPlaceHolder = () => {
  return (
    <div className={twMerge(classes.projectCardPlaceholder, "w-0 md:w-[400px]")}>
      <div className="w-full h-[200px] bg-white/10 rounded-md" />
      <div className="w-full h-[24px] bg-white/10 rounded-md" />
      <div className="w-full h-[14px] bg-white/10 rounded-md" />
      <div className="w-full h-[14px] bg-white/10 rounded-md" />
    </div>
  );
};

export default ProjectCardPlaceHolder;
