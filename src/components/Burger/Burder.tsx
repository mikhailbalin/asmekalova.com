import { DefaultProps, Selectors, UnstyledButton } from "@mantine/core";
import useStyles, { BurgerStylesParams } from "./Burger.styles";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

type BurgerStylesNames = Selectors<typeof useStyles>;

interface BurgerProps
  extends DefaultProps<BurgerStylesNames, BurgerStylesParams> {
  opened: boolean;
  onClick: () => void;
}

export const Burger = ({
  classNames,
  styles,
  unstyled,
  className,
  opened,
  onClick,
  ...others
}: BurgerProps) => {
  const [animating, setAnimating] = useState(false);
  const { classes, cx } = useStyles(
    { animating },
    { name: "Burger", classNames, styles, unstyled }
  );

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      onClick={() => {
        onClick();
        setAnimating(true);
      }}
      {...others}
    >
      <div
        className={cx(classes.line)}
        onAnimationIteration={() => {
          setAnimating(false);
        }}
      />
      <div className={cx(classes.line)} />
    </UnstyledButton>
  );
};
