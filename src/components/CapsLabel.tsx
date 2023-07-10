import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    fontSize: rem(14),
    lineHeight: "1.3em",
    letterSpacing: ".02em",
    textTransform: "uppercase",
    // marginTop: rem(50),
    marginBottom: rem(20),
  },
}));

interface CapsLabelProps {
  children: React.ReactNode;
}

export const CapsLabel = ({ children }: CapsLabelProps) => {
  const { classes } = useStyles();

  return <div className={classes.root}>{children}</div>;
};
