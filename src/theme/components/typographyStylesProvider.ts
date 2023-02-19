import { ThemeComponent } from "../types";
import { textStyles, titleStyles } from "../typography";

export const typographyStylesProvider: ThemeComponent = {
  styles: (...args) => ({
    root: {
      ...titleStyles("provider")(...args).root,
      ...textStyles("provider")(...args).root,
    },
  }),
};
