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
  },

  links: {
    display: "none",
    [theme.fn.largerThan("sm")]: {
      display: "block",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  drawerBody: {
    paddingTop: rem(60),
  },
}));
