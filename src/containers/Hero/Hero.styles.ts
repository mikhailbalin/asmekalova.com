import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: rem(100),
    // paddingBottom: rem(120),
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.largerThan("sm")]: {
      paddingTop: rem(150),
      paddingBottom: rem(150),
    },

    [theme.fn.largerThan("md")]: {
      paddingTop: rem(250),
      paddingBottom: rem(250),
    },
  },

  title: {
    fontSize: rem(35),
    marginBottom: "2.8vw",
    fontWeight: 300,
    lineHeight: 1.2,
  },

  image: {
    width: "100%",
    height: "auto",
  },
}));
