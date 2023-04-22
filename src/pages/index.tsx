import React, { useState } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from "../../lib/prisma";
import Filter from "../components/Filter";
import SurveysHeading from "../components/SurveysHeading";
import { useToggleViewMode } from "../store/toggleViewMode";
import Link from "next/link";
import Header from "../components/Header";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};
//k

const Home: React.FC<Props> = (props) => {
  const toggleViewMode = useToggleViewMode((state) => state.toggleViewMode);
  return (
    <Layout>
      <Header />
      <div className="page grid grid-cols-5 gap-6 flex mb-6">
        <div className="mt-5 pt-5 col-span-1 rounded-lg bg-white border border-gray-300">
          <div className="mx-3">
            <div className="grid grid-cols-6 gap-4 w-full rounded py-2 px-3 bg-gray-100 text-sm">
              <div className="col-start-1 col-end-4 font-medium">
                All Surveys
              </div>
              <div className="col-end-8 col-span-1 text-gray-600">1</div>
            </div>
          </div>
        </div>
        <div className="mt-5 col-span-4">
          <SurveysHeading />
          <Filter />
          <div>{toggleViewMode}</div>
          <main className="mt-5">
            <div
              className={`grid ${
                toggleViewMode ? "grid-cols-1" : "grid-cols-3"
              } gap-4`}
            >
              {props.feed.map((post) => (
                <div key={post.id}>
                  <Post post={post} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
