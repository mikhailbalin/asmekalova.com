import { CSSObject, TitleStylesParams } from "@mantine/core";
import { MantineTheme } from "@mantine/styles";
import { StylesType } from "./types";

type HeadingElement = TitleStylesParams["element"];
type HeadingStyles = Record<HeadingElement, CSSObject>;

const headingStyles = ({ fontFamily, fn }: MantineTheme): HeadingStyles => ({
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
});

export const titleStyles =
  (type: StylesType) =>
  (
    theme: MantineTheme,
    { element }: TitleStylesParams
  ): Record<string, CSSObject> => {
    const styles = headingStyles(theme);
    const providerStyles: Partial<HeadingStyles> = {};

    if (type === "provider") {
      for (let key of Object.keys(styles)) {
        const newKey = `& ${key}`;
        providerStyles[newKey as HeadingElement] =
          styles[key as HeadingElement];
      }
    }

    return {
      root: {
        ...(type === "component" ? styles[element] : providerStyles),
      },
    };
  };
