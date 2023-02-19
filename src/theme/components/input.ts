import { InputStylesParams, InputProps } from "@mantine/core";
import { ThemeComponent } from "../types";

export const input: ThemeComponent = {
  defaultProps: {
    variant: "filled",
    radius: 0,
  } satisfies InputProps,
  styles: ({ other, white, black, fn }, params: InputStylesParams) => ({
    input: {
      "&:focus": {},

      "&:focus-within": {},

      "&::placeholder": {},
    },
  }),
};
