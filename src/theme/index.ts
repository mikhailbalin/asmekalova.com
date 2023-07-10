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
    Container: {
      styles: ({ fn }, params, context) => ({
        root: {
          maxWidth: "none",
          [fn.largerThan("sm")]: {
            maxWidth: params.sizes.sm,
          },
        },
      }),
      defaultProps: {
        size: "xs",
        sizes: {
          xs: "95vw",
          sm: "85vw",
        },
      },
    },
    Title: {
      styles: {
        root: {
          "&:is(h4)": {
            fontSize: "24px",
            lineHeight: "1.5em",
            fontWeight: 400,
            letterSpacing: ".02em",
          },
        },
      },
    },
  },
};
