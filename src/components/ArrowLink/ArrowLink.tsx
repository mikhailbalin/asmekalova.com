import { Anchor, Box } from "@mantine/core";
import { useStyles } from "./ArrowLink.styles";

interface ArrowLinkProps {
  children: React.ReactNode;
  href: string;
}

export const ArrowLink = ({ children, href, ...props }: ArrowLinkProps) => {
  const { classes } = useStyles();
  return (
    <Anchor href={href} className={classes.root}>
      {children}
      <Box className={classes.arrow} />
    </Anchor>
  );
};
