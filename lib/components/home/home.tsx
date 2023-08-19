import Lottie from "lottie-react";
import Container from "../container";
import Footer from "../layout/footer";
import NavBar from "../layout/nav-bar";
import Experience from "./experience/experience";
import ProjectCarousel from "./project/project-card-carousel";
import { stagger } from "framer-motion";
import { motion } from "framer-motion";

import blinkAnim from "../../assets/blink.json";

const FADE_INITIAL = { opacity: 0 };
const FADE_ANIMATE = { opacity: 1 };

const DURATION1 = { duration: 0.8 };
const DURATION2 = {
  delay: 0.25,
  duration: 0.8,
};
const DURATION3 = {
  delay: 0.5,
  duration: 0.8,
};
const DURATION4 = { delay: 0.75, duration: 0.8 };

export const Home = () => {
  return (
    <div className="w-full bg-shade h-screen overflow-scroll hide-scrollbar">
      <Container className="mb-10">
        <motion.div
          initial={FADE_INITIAL}
          animate={FADE_ANIMATE}
          transition={DURATION1}
        >
          <h1 className="text-3xl font-bold text-white mb-8 mt-32">
            Annie Sun!
          </h1>
        </motion.div>

        <div className="flex flex-row gap-10">
          <p className="text-white mb-4">
            <motion.span
              initial={FADE_INITIAL}
              animate={FADE_ANIMATE}
              transition={DURATION2}
            >
              I'm a software engineer (with an eye for design), and I'm studying
              Computer Science at the University of Waterloo. I'm specializing
              in Human Computer Interaction and I love creating compelling
              experiences for both developers & users.
            </motion.span>
            <br />
            <br />
            <motion.span
              initial={FADE_INITIAL}
              animate={FADE_ANIMATE}
              transition={DURATION3}
            >
              In my free-time you can find me painting, messing around on the
              badminton court, or listening to video essays!
            </motion.span>
          </p>
         
        </div>
      </Container>
      <motion.div
        className="mb-16"
        initial={FADE_INITIAL}
        animate={FADE_ANIMATE}
        transition={DURATION4}
      >
        <ProjectCarousel />
      </motion.div>
      <motion.div
        className="mb-24"
        initial={FADE_INITIAL}
        animate={FADE_ANIMATE}
        transition={DURATION4}
      >
        <Experience />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
