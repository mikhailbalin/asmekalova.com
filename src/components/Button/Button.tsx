import {
  Button as MantineButton,
  rem,
  createStyles,
  Selectors,
  DefaultProps,
} from "@mantine/core";

export interface ButtonStylesParams {}

const useStyles = createStyles((theme, params: ButtonStylesParams) => ({
  root: {
    border: `1px solid ${theme.black}`,
    borderRadius: "50%",
    color: "#000",
    textTransform: "none",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

type ButtonStylesNames = Selectors<typeof useStyles>;

interface ButtonProps
  extends DefaultProps<ButtonStylesNames, ButtonStylesParams> {}

export const Button = ({
  classNames,
  styles,
  unstyled,
  className,
  ...others
}: ButtonProps) => {
  const { classes, cx } = useStyles(
    {},
    { name: "Button", classNames, styles, unstyled }
  );

  return (
    <MantineButton
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/mantinedev"
      uppercase={false}
      className={cx(classes.root, className)}
      {...others}
    >
      Book a Call
    </MantineButton>
  );
};
