import { createStyles, rem } from "@mantine/core";
import image from "./3X5A5956-1.jpg";

export const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(120),
    backgroundImage: `url(${image.src})`,
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
    color: theme.white,
  },
}));
