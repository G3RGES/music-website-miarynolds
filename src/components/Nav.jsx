import React from "react";
import { Link } from "react-scroll";

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
    path: "contact",
    name: "Contact",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, idx) => {
        return (
          <Link
            key={idx}
            to={link.path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            smooth
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
