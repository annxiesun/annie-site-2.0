import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

type Link = {
  label: string;
  link: string;
};
const LINKS: Link[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Writing",
    link: "/writing",
  },
];

const INITIAL = {opacity: 0}
const ANIMATE = {opacity: 1}
const TRANSITION = { delay: 1.5 }
export const NavBar = () => {
  return (
    <motion.div initial={INITIAL} animate={ANIMATE} transition={TRANSITION} className="w-full flex gap-3 justify-end px-12 py-4">
      {LINKS.map((link) => (
          <Link href={link.link} className="text-white hover:bg-white/20 rounded-md transition-colors duration-100 px-2 py-1">{link.label}</Link>
      ))}
    </motion.div>
  );
};

export default NavBar;
