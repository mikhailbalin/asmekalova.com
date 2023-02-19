import { ButtonStylesParams } from "@mantine/core";
import { ThemeComponent } from "../types";

export const button: ThemeComponent = {
  defaultProps: {
    radius: 0,
    uppercase: true,
  },
  styles: ({ other, white }, params: ButtonStylesParams) => ({
    root: {
      "&:hover": {},
    },
  }),
};
