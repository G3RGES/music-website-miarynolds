import React from "react";

import SectionHeader from "../events/SectionHeader";
import PostList from "./PostList";

const getPosts = async () => {
  const res = await fetch("http://localhost:4000/posts");
  return res.json();
};

const Blog = async () => {
  const posts = await getPosts();
  // console.log(posts); // testing

  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
      </div>
    </section>
  );
};

export default Blog;
