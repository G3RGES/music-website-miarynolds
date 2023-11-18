"use client";

import React from "react";

import AlbumSlider from "./AlbumSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import SectionHeader from "../events/SectionHeader";

const Albums = () => {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
      </div>
    </section>
  );
};

export default Albums;
