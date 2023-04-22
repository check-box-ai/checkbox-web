import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useToggleViewMode } from "../store/toggleViewMode";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const toggleViewMode = useToggleViewMode((state) => state.toggleViewMode);

  let postComponent = null;
  if (!toggleViewMode) {
    postComponent = (
      <div className="h-full w-full">
        <div className="relative ">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
            className="mb-3 object-cover h-48 w-full rounded-lg 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button className="absolute top-3 right-3 flex items-center justify-center rounded-full hover:bg-gray-100 bg-white p-2 text-brand-500 hover:cursor-pointer">
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="mb-1">
            <p className="text-md font-bold text-navy-700 mb-2">
              Measure Net Promoter Score (NPS)
            </p>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              Enabled
            </span>
          </div>
        </div>
        <div className="mb-4 ml-1">
          <p className="text-sm text-navy-700">
            This is what your customer feedback will look like once you
            integrate the widget into your website! Why don't you try clicking
            'Reply with Mail' below and sending me an email?{" "}
          </p>
        </div>
        <div className="flex md:mt-2 lg:mt-0">
          <span className=" h-8 w-8 rounded-md border-2 border-white">
            <img
              className="h-full w-full rounded-md object-cover"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
              alt=""
            />
          </span>
          <p className="mt-1 ml-2 text-sm text-gray-500 md:mt-2">
            Created 2 month ago
          </p>
        </div>
      </div>
    );
  } else {
    postComponent = (
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
            className="w-10 h-10 rounded-md"
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0 space-x-4">
          <span className="text-md font-medium text-gray-900 truncate dark:text-white ml-2">
            Measure Net Promoter Score (NPS)
          </span>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            Enabled
          </span>
        </div>
        <div className="flex">
          <span className=" h-8 w-8 rounded-md border-2 border-white">
            <img
              className="h-full w-full rounded-md object-cover"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
              alt=""
            />
          </span>
          <p className="mt-1 ml-2 text-sm text-gray-500 md:mt-2">
            Created 2 month ago
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
      className="relative flex flex-col border border-gray-300 rounded-[10px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white hover:bg-gray-100"
    >
      {postComponent}
    </div>
  );
};

// <div
//     className="rounded-md inherit p-8"
//
// >
//   <h2></h2>
//   <small>By {authorName}</small>
//   <ReactMarkdown>{post.content}</ReactMarkdown>
// </div>
export default Post;
