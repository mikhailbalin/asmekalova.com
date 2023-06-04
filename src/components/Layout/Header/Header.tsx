import React from "react";
import { HeaderContent } from "./HeaderContent/HeaderContent";
import { animated, useScroll } from "@react-spring/web";
import { useStyles } from "./Header.styles";

interface HeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export const Header = ({ links }: HeaderProps) => {
  const { classes } = useStyles();
  const { scrollY } = useScroll();

  return (
    <animated.header
      className={classes.header}
      style={{
        height: scrollY.to((val) => Math.max(50, 60 - val * 0.05)),
        backgroundColor: scrollY.to(
          (val) => `rgba(255, 255, 255, ${Math.min(1, val / 200)})`
        ),
      }}
    >
      <HeaderContent links={links} />
    </animated.header>
  );
};
