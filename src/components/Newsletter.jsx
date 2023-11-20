"use client";

import React from "react";

import SectionHeader from "./events/SectionHeader";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Newsletter = () => {
  return (
    <section
      className="bg-newsletter bg-fixed h-[480px] section 
    bg-cover w-full bg-center bg-no-repeat"
      id="contact"
    >
      <div className="container mx-auto h-full">
        <div>
          {/* text */}
          <SectionHeader
            pretitle="Get in Touch"
            title="Sign up to our newsletter"
          />
          {/* input */}
          <div className="relative flex items-center w-full max-w-xl  ">
            <input type="text" placeholder="Email address" className="" />
            <button type="submit" className="bg-pink-400">
              Subscripe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
