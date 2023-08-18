import { Head } from "next/document";
import Home from "../../lib/components/home/home";
import { getAllPosts } from "../../lib/utils/api";
import { CMS_NAME } from "../../lib/utils/constants";

import Post from "../../lib/interfaces/post";
import Writing from "../../lib/components/writing/writing";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
        <Writing posts={allPosts} />
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
