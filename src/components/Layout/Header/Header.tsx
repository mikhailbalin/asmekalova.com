import { Header as MantineHeader } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";
import { HeaderContent } from "./HeaderContent/HeaderContent";
import { HEADER_HEIGHT } from "@components/constants";

interface HeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export const Header = ({ links }: HeaderProps) => {
  const [scroll] = useWindowScroll();

  const headerHeight = Math.max(50, 60 - scroll.y * 0.05);
  const backgroundColor = `rgba(255, 255, 255, ${Math.min(1, scroll.y / 200)})`;

  return (
    <MantineHeader
      height={HEADER_HEIGHT}
      style={{ height: headerHeight, backgroundColor, transition: "all 0.3s" }}
      sx={{ borderBottom: 0 }}
      fixed
    >
      <HeaderContent links={links} />
    </MantineHeader>
  );
};
