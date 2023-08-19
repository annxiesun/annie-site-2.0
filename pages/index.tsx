import Container from "../lib/components/container";
import MoreStories from "../lib/components/more-stories";
import HeroPost from "../lib/components/hero-post";
import Layout from "../lib/components/layout";
import { getAllPosts } from "../lib/utils/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/utils/constants";
import Post from "../lib/interfaces/post";
import Home from "../lib/components/home/home";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Home />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
