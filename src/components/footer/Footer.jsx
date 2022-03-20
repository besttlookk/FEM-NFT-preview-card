import React from "react";
import { FooterWrapper } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      Challenge by{" "}
      <a
        rel="noreferrer"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/besttlookk"
        target="_blank"
        rel="noreferrer"
      >
        Prabhash Ranjan
      </a>
      .
    </FooterWrapper>
  );
};

export default Footer;
