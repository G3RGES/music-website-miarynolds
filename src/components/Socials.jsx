import React from "react";

import Link from "next/link";

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, idx) => (
        <Link href={social.path} key={idx}>
          <div className={`${iconStyles}`}>{social.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
