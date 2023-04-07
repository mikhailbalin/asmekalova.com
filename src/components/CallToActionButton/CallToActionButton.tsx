import { Group, Button, rem } from "@mantine/core";

export const CallToActionButton = () => (
  <Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    href="https://twitter.com/mantinedev"
    styles={(theme) => ({
      root: {
        border: "1px solid #000",
        borderRadius: "50%",
        color: "#000",
        textTransform: "none",
        // backgroundColor: "#00acee",
        // border: 0,
        // height: rem(42),
        // paddingLeft: rem(20),
        // paddingRight: rem(20),
        // "&:not([data-disabled])": theme.fn.hover({
        //   backgroundColor: theme.fn.darken("#00acee", 0.05),
        // }),
      },
    })}
  >
    Book a Call
  </Button>
);
