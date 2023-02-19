import { MantineTheme } from "@mantine/core";

export type ThemeComponent =
  MantineTheme["components"][keyof MantineTheme["components"]];
