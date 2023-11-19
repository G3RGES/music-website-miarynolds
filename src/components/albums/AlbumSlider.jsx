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
              <div
                className="w-full bg-secondary/80 rounded-[10px] flex flex-col 
              xl:flex-row items-center p-6 xl:p-12 gap-x-12  "
              >
                {/* image */}
                <div
                  className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]
                relative cursor-pointer rounded-[10px] overflow-hidden  "
                >
                  <Image
                    src={album.img}
                    alt="album_img"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                {/* track container */}
                <div className="flex flex-1 w-full h-[500px]  ">
                  {/* tracks */}
                  <div className="flex-1 flex flex-col xl:px-12  ">
                    {album.tracks?.map((track, idx) => {
                      return (
                        <div
                          className="flex flex-1 w-full h-[500px]  "
                          key={idx}
                        >
                          {/* track name */}
                          <div
                            className="flex flex-1 items-center gap-x-2 capitalize 
                          font-semibold xl:font-extrabold  "
                          >
                            <div className="text-accent text-sm xl:text-lg">
                              0{idx + 1}.
                            </div>
                            <div className="text-sm xl:text-base  ">
                              {track.name}
                            </div>
                          </div>
                          {/* player */}
                          <div>
                            <AudioPlayer
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                width: "100%",
                              }}
                              width="100%"
                              src={track.src}
                              loop
                              preload="none"
                              color="#fff"
                              volume={40}
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
