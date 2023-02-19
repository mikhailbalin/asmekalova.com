import { CSSObject, TextStylesParams } from "@mantine/core";
import { MantineTheme } from "@mantine/styles";
import { StylesType } from "./types";

export const textStyles =
  (type: StylesType) =>
  (
    { fn, other, black }: MantineTheme,
    { color }: TextStylesParams
  ): Record<string, CSSObject> => {
    const styles = {};

    return {
      root: {
        ...(type === "component"
          ? styles
          : {
              "& p": styles,
            }),
      },
    };
  };
