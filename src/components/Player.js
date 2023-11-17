"use client";

import React from "react";

import { images } from "next.config";

import { AudioPlayer } from "react-audio-play";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-tertiary/70
       to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40 "
      >
        <div
          className="container mx-auto flex flex-col justify-between items-center 
        xl:flex-row "
        >
          {/* text & avatar image */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4 ">
            text & avatar image
          </div>
          {/* player */}
          <div className="w-full max-w-4xl ">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              width={"100%"}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
