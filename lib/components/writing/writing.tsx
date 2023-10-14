import Container from "../container";
import Footer from "../layout/footer";

import techAnimation from "../../assets/tech.json";
import Lottie from "lottie-react";

import Post from "../../interfaces/post";
import Link from "next/link";
import WritingItem from "./writing-item";
import { motion } from "framer-motion";
import NavBar from "../layout/nav-bar";

type WritingProps = {
  posts: Post[];
};

export const Writing = ({ posts }) => {
  return (
    <>
      <NavBar />
      <div className="w-full bg-shade h-screen overflow-scroll hide-scrollbar">
        <Container className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-1 mt-32">
            Scribbles
          </h1>
          <p className="text-white mb-10">
            Some thoughts on projects I've worked on & maybe more
          </p>
          <div className="flex flex-col gap-10">
            {posts.map((post, i) => (
              <WritingItem post={post} delay={i} />
            ))}
          </div>
        </Container>

        <div className="mb-56">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Writing;
