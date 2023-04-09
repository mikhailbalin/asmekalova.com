import { createStyles, rem } from "@mantine/core";
import image from "./3X5A5956-1.jpg";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    // backgroundImage: `url(${image.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: "80vh",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  // inner: {
  //   position: "relative",
  //   zIndex: 1,
  // },

  title: {
    fontSize: rem(40),
    marginBottom: "2.8vw",
    fontWeight: 200,
    lineHeight: 1.2,

    // letterSpacing: rem(-1),
    // paddingLeft: theme.spacing.md,
    // paddingRight: theme.spacing.md,
    // color: theme.white,
    // textAlign: "center",
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    // [theme.fn.smallerThan("xs")]: {
    //   fontSize: rem(28),
    //   textAlign: "left",
    // },
  },

  // controls: {
  //   marginTop: `calc(${theme.spacing.xl} * 1.5)`,
  //   display: "flex",
  //   justifyContent: "center",
  //   paddingLeft: theme.spacing.md,
  //   paddingRight: theme.spacing.md,

  //   [theme.fn.smallerThan("xs")]: {
  //     flexDirection: "column",
  //   },
  // },

  // control: {
  //   height: rem(42),
  //   fontSize: theme.fontSizes.md,

  //   "&:not(:first-of-type)": {
  //     marginLeft: theme.spacing.md,
  //   },

  //   [theme.fn.smallerThan("xs")]: {
  //     "&:not(:first-of-type)": {
  //       marginTop: theme.spacing.md,
  //       marginLeft: 0,
  //     },
  //   },
  // },

  image: {
    width: "100%",
    height: "auto",
  },
}));
