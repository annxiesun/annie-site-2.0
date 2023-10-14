import Container from "../container";
import Footer from "../layout/footer";
import Experience from "./experience/experience";
import ProjectCarousel from "./project/project-card-carousel";
import { motion } from "framer-motion";
import Image from "next/image";

import blinkAnim from "../../assets/blink.json";
import { useState } from "react";

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
  const [imageLoaded, setImageLoaded] = useState(false)
  const fadeIn = () => {
    setImageLoaded(true)
  };

  return (
    <>
      <Image
        src={"/assets/bg/blob1.png"}
        alt=""
        width={1000}
        height={500}
        unoptimized={true}
        priority
        className={`${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 absolute z-[0] top-[-100px] left-1/2 transform -translate-x-1/2`}
        onLoadingComplete={fadeIn}
      />
      <div className="w-full h-screen overflow-scroll hide-scrollbar fixed">
        <Container className="mb-10">
          <motion.div
            initial={FADE_INITIAL}
            animate={FADE_ANIMATE}
            transition={DURATION1}
            className="relative"
          >
            <h1 className="text-3xl font-bold text-white mb-8 mt-32">
              Annie Sun ✰
            </h1>
          </motion.div>

          <div className="flex flex-row gap-10">
            <p className="text-white mb-4">
              <motion.span
                initial={FADE_INITIAL}
                animate={FADE_ANIMATE}
                transition={DURATION2}
              >
                I'm a software engineer (with an eye for design), and I'm
                studying Computer Science at the University of Waterloo & am
                part of the{" "}
                <a
                  target="_blank"
                  className="underline hover:text-[#033aff] transition-all"
                  href="https://www.jeffjianzhao.com/"
                >
                  {"WatVis"}
                </a>{" "}
                team. I'm specializing in Human Computer Interaction and I love
                creating compelling experiences for both developers & users.
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
        <div className="text-white w-full flex justify-center mb-56 gap-3">
          <a
            className="hover:underline"
            href="https://d3l-n3st.vercel.app/prev"
          >
            {"<<"}
          </a>
          <span>✰</span>
          <a
            className="hover:underline"
            href="https://d3l-n3st.vercel.app/next"
          >
            {">>"}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
