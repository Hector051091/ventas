import React from "react";
import { NavFooter, Span } from "./StyledFooter";

const Footer = () => {
  return (
    <NavFooter>
      <Span>
        By Héctor Ponte{" "}
        <a
          href="https://www.linkedin.com/in/h%C3%A9ctor-javier-ponte-gonz%C3%A1lez-26750837/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Span>
    </NavFooter>
  );
};

export default Footer;
