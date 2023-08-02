import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    color: theme.black,
  },

  arrow: {
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    width: rem(80),
    height: rem(1),
    backgroundColor: theme.black,
    marginLeft: rem(40),

    "&::before, &::after": {
      content: '""',
      display: "block",
      width: rem(7),
      height: rem(6),
      border: `1px solid ${theme.black}`,
      right: 0,
    },

    "&::before": {
      borderBottomLeftRadius: "100%",
      borderTop: "none",
      borderRight: "none",
      position: "absolute",
      bottom: "calc(100% - 1px)",
    },

    "&::after": {
      borderTopLeftRadius: "100%",
      borderBottom: "none",
      borderRight: "none",
      position: "absolute",

      top: "calc(100% - 1px)",
    },
  },
}));
