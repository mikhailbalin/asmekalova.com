import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: rem(200),
    paddingBottom: rem(40),
    zIndex: 1,
    overflow: "hidden",
  },

  title: {
    fontSize: rem(35),
    marginBottom: "2.8vw",
    fontWeight: 300,
    lineHeight: 1.2,
  },

  label: {
    marginBottom: "20px",
    fontSize: "14px",
    lineHeight: "1.3em",
    letterSpacing: ".02em",
    textTransform: "uppercase",
  },

  image: {
    borderRadius: "50%",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  imageWrapper: {
    width: 250,
    height: 250,
    position: "absolute",
    top: 40,
    right: -40,
    zIndex: -1,
  },
}));
