import React from "react";
import { Link } from "react-scroll";

import { useMediaQuery } from "react-responsive";

const Links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width:1310px)",
  });
  // console.log(isDesktop); // Testing

  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, idx) => {
        return (
          <Link
            key={idx}
            to={link.path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
