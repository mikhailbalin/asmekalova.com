import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header links={[{ label: "Label", link: "/", links: [] }]} />
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
    </>
  );
}
