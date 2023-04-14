import Link from "next/link";
import { useStyles } from "./HeaderLink.styles";

interface HeaderLinkProps {
  link: string;
  children: React.ReactNode;
}

export const HeaderLink = ({ link, children }: HeaderLinkProps) => {
  const { classes } = useStyles();

  return (
    <Link
      href={link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {children}
    </Link>
  );
};
