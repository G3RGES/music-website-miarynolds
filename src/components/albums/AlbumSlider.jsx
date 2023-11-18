"use client";

import React, { useState } from "react";

import useSWR from "swr";
import Image from "next/image";

import { AudioPlayer } from "react-audio-play";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// fetcher
const fetcher = (url) => {
  fetch(url).then((res) => res.json());
};

const AlbumSlider = () => {
  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);

  return <div>AlbumSlider</div>;
};

export default AlbumSlider;
