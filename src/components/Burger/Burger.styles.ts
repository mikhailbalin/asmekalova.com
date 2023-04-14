import { createStyles, keyframes, rem } from "@mantine/core";

export const top = keyframes({
  "50%": { transform: "translateY(5px)" },
  to: { transform: "translateY(5px) rotate(45deg)" },
});

export const bottom = keyframes({
  "50%": { transform: "translateY(-5px)" },
  to: { transform: "translateY(-5px) rotate(-45deg)" },
});

export interface BurgerStylesParams {
  animating: boolean;
}

export default createStyles((theme, { animating }: BurgerStylesParams) => ({
  root: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: rem(9),
  },

  line: {
    width: rem(25),
    height: rem(1),
    backgroundColor: theme.black,
    animationDuration: "400ms",
    animationTimingFunction: "ease-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationFillMode: "forwards",
    animationPlayState: animating ? "running" : "paused",

    "&:first-of-type": {
      animationName: top,
    },

    "&:last-of-type": {
      animationName: bottom,
    },
  },
}));
