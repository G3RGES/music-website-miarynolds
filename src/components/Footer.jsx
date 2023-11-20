"use client";

import React from "react";

import Link from "next/link";
import Socials from "./Socials";
import Nav from "./Nav";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Footer = () => {
  return (
    <footer className="bg-accent section">
      <div
        className="container mx-auto px-4 py-16 flex flex-col items-center justify-center
      gap-y-8"
      >
        {/* email link */}
        <div>
          <Link href="#">
            <h2>hello@miareynolds.com</h2>
          </Link>
        </div>
        {/* nav */}
        <div>
          <Nav
            containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4
            xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all"
          />
        </div>
        {/* socials */}
        <div>
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/80 transition-all justify-center items-center"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
