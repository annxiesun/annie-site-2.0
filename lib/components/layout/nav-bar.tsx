import Link from "next/link";
import { motion } from "framer-motion";
import classes from "./navbar.module.css"

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

export const NavBar = () => {
  return (
    <motion.div className={`w-full flex gap-3 justify-end px-12 py-4 ${classes.navbar}`}>
      {LINKS.map((link) => (
          <Link href={link.link} className="text-white hover:bg-white/20 rounded-md transition-colors duration-100 px-2 py-1">{link.label}</Link>
      ))}
    </motion.div>
  );
};

export default NavBar;
