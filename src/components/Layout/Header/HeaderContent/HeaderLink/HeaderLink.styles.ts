import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    textDecoration: "none",
    color: theme.black,
    textAlign: "center",
    fontSize: rem(14),
    lineHeight: "3em",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1.8vw",
      lineHeight: "1.6em",
    },

    [theme.fn.largerThan("md")]: {
      fontSize: "1.25vw",
    },
  },
}));
