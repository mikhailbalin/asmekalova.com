import { ThemeComponent } from "../types";
import { textStyles } from "../typography";

export const text: ThemeComponent = {
  defaultProps: {
    component: "p",
  },
  styles: textStyles("component"),
};
