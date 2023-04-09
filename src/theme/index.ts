import { ButtonStylesParams, rem } from "@mantine/core";
import { MantineThemeOverride } from "@mantine/styles";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

declare module "@mantine/core" {
  export interface MantineThemeOther {
    colors: {
      brand1: "#f2e9e9";
      brand2: "#dfd2cd";
      brand3: "#dfeaee";
      gray1: "#737373";
      gray2: "#e1e1e1";
    };
  }
}

export const theme: MantineThemeOverride = {
  fontFamily: manrope.style.fontFamily,
  headings: {
    fontFamily: manrope.style.fontFamily,
  },
  other: {
    colors: {
      brand1: "#f2e9e9",
      brand2: "#dfd2cd",
      brand3: "#dfeaee",
      gray1: "#737373",
      gray2: "#e1e1e1",
    },
  },
  components: {
    // Button: {
    //   styles: (theme, params: ButtonStylesParams, { variant }) => ({
    //     root: {
    //       border: `1px solid ${theme.black}`,
    //       borderRadius: "50%",
    //       color: theme.black,
    //       fontSize: rem(13),
    //       backgroundColor: "transparent",
    //       transform: "rotateZ(2.5deg)",
    //       transition: "transform 0.2s ease-in-out",
    //       "&:hover": {
    //         backgroundColor: theme.white,
    //         transform: "rotateZ(0deg)",
    //       },
    //     },
    //   }),
    // },
  },
};
