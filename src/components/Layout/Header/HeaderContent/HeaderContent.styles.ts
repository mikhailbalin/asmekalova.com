import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  group: {
    width: "100%",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row-reverse",
    },
  },

  links: {
    display: "none",

    [theme.fn.largerThan("sm")]: {
      display: "flex",
      gap: "2vw",
    },
  },

  burger: {
    marginLeft: "auto",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  drawerRoot: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  drawerBody: {
    paddingTop: rem(60),
    paddingBottom: rem(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  drawerContent: {
    height: "auto",
  },
}));
