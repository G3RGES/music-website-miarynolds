"use client";

import React from "react";

import { AudioPlayer } from "react-audio-play";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import Image from "next/image";

const Player = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 1.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: false,
          amount: 0.7,
        }}
        className="bg-gradient-to-r from-tertiary/70
       to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40 "
      >
        <div
          className="container mx-auto flex flex-col justify-between items-center 
        xl:flex-row "
        >
          {/* text & avatar image */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4 ">
            {/* avatr */}
            <div className="relative w-16 h-16 ">
              <Image
                src={"/assets/player/avatar.png"}
                fill
                alt="avatar_img"
                priority
              />
            </div>
            {/* text */}
            <div className="leading-none ">
              <div className="text-lg font-medium ">Mia Reynolds</div>
              <div className="text-sm font-light ">Freedom</div>
            </div>
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
      </motion.div>
    </>
  );
};

export default Player;
