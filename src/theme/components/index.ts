import { MantineThemeOverride } from "@mantine/core";
import { button } from "./button";
import { input } from "./input";
import { text } from "./text";
import { title } from "./title";
import { typographyStylesProvider } from "./typographyStylesProvider";

export const components: MantineThemeOverride["components"] = {
  Button: button,
  Title: title,
  Text: text,
  TypographyStylesProvider: typographyStylesProvider,
  InputWrapper: {
    defaultProps: {
      inputWrapperOrder: ["label", "description", "input", "error"],
    },
    styles: () => ({
      label: {},
    }),
  },
  Input: input,
};
