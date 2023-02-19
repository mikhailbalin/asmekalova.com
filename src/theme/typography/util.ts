import { TitleStylesParams } from "@mantine/core";
import { StylesType } from "./types";

/**
 * @deprecated
 * This function is no longer being used and will be removed in a future release.
 */
export const select = (
  type: StylesType,
  element: TitleStylesParams["element"] | keyof Pick<JSX.IntrinsicElements, "p">
) => (type === "component" ? `&:is(${element})` : `& ${element}`);
