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
const fetcher = (url) => fetch(url).then((res) => res.json());

const AlbumSlider = () => {
  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);
  console.log(data);

  if (error) return "Failed to fetch data";
  if (!data) return "Loading...";

  return (
    <>
      {/* top slider */}
      <Swiper>
        {data.map((album) => {
          // console.log(album); //Testing
          return (
            <SwiperSlide key={album.id} className="mb-12">
              <div>
                {/* image */}
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] ">
                  <Image
                    src={album.img}
                    alt="album_img"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                {/* track container */}
                <div>track container</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* thumb slider */}
      <Swiper>thumb slider</Swiper>
    </>
  );
};

export default AlbumSlider;
