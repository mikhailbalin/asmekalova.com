import React from "react";
import { createStyles } from "@mantine/core";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.other.colors.brand1,
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header
        links={[
          { label: "Home", link: "/" },
          { label: "About me", link: "/" },
          { label: "Services", link: "/" },
          { label: "Journal", link: "/" },
        ]}
      />
      {children}
      <Footer
        data={[
          {
            title: "About",
            links: [
              {
                label: "Features",
                link: "#",
              },
              {
                label: "Pricing",
                link: "#",
              },
              {
                label: "Support",
                link: "#",
              },
              {
                label: "Forums",
                link: "#",
              },
            ],
          },
          {
            title: "Project",
            links: [
              {
                label: "Contribute",
                link: "#",
              },
              {
                label: "Media assets",
                link: "#",
              },
              {
                label: "Changelog",
                link: "#",
              },
              {
                label: "Releases",
                link: "#",
              },
            ],
          },
          {
            title: "Community",
            links: [
              {
                label: "Join Discord",
                link: "#",
              },
              {
                label: "Follow on Twitter",
                link: "#",
              },
              {
                label: "Email newsletter",
                link: "#",
              },
              {
                label: "GitHub discussions",
                link: "#",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
