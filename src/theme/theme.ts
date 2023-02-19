import { MantineThemeOverride } from "@mantine/styles";
import { components } from "./components";
import { breakpoints } from "./foundations/breakpoints";

const baseFontFamily =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";

declare module "@mantine/core" {
  export interface MantineThemeOther {
    colors: {};
  }
}

export const theme: MantineThemeOverride = {
  fontFamily: `IBM Plex Mono, ${baseFontFamily}`,
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: `Playfair Display, ${baseFontFamily}`,
  },
  other: {
    colors: {},
  },
  components,
  breakpoints,
};
