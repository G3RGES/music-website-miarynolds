"use client";

import React from "react";

import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const PostList = ({ posts }) => {
  // console.log(posts); //testing

  // get first three posts
  const firstThreePosts = posts.slice(0, 3);
  // console.log(firstThreePosts); //testing

  return <div>PostList</div>;
};

export default PostList;
