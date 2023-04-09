import {
  UnstyledButton,
  rem,
  createStyles,
  Selectors,
  DefaultProps,
  getStylesRef,
} from "@mantine/core";

export interface ButtonStylesParams {}

const useStyles = createStyles((theme, params: ButtonStylesParams) => ({
  root: {
    position: "relative",
    color: theme.black,
    fontSize: rem(13),
    padding: "12px 25px",
    lineHeight: 1.3,
    zIndex: 1,

    "&:hover": {
      [`& .${getStylesRef("outline")}`]: {
        transform: "rotateZ(0deg)",
        backgroundColor: theme.white,
      },
    },

    // zIndex: 1,
    // display: 'flex',
    // padding: "1vw 2vw",
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: '#000',
    // fontSize: "1.25vw",
    // lineHeight: 1.2,
    // textAlign: 'center',
    // textDecoration: 'none'
  },

  outline: {
    ref: getStylesRef("outline"),
    transform: "rotateZ(2.5deg)",
    transition: `all 300ms ${theme.transitionTimingFunction}`,
    border: `1px solid ${theme.black}`,
    borderRadius: "50%",
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    zIndex: -1,
  },
}));

type ButtonStylesNames = Selectors<typeof useStyles>;

interface ButtonProps
  extends DefaultProps<ButtonStylesNames, ButtonStylesParams> {
  children: React.ReactNode;
}

export const Button = ({
  classNames,
  styles,
  unstyled,
  className,
  children,
  ...others
}: ButtonProps) => {
  const { classes, cx } = useStyles(
    {},
    { name: "Button", classNames, styles, unstyled }
  );

  return (
    <UnstyledButton className={cx(classes.root, className)} {...others}>
      <div className={classes.outline} />
      {children}
    </UnstyledButton>
  );
};
