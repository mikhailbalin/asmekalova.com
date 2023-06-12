import React from "react";
import {
  Affix,
  useMantineTheme,
  MediaQuery,
  Box,
  CSSObject,
  Paper,
  Transition,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function BreakpointViewer() {
  const { colorScheme, fn, colors, fontFamilyMonospace } = useMantineTheme();
  const { hovered, ref } = useHover();

  const highlight: CSSObject = {
    backgroundColor:
      colorScheme === "dark" ? fn.rgba(colors.blue[7], 0.25) : colors.blue[0],
    border: `1px solid ${
      colorScheme === "dark" ? colors.blue[6] : colors.blue[3]
    }`,
  };

  const boxStyles = {
    borderRadius: 3,
    padding: "3px 5px",
    border: "1px solid transparent",
    fontFamily: fontFamilyMonospace,
    fontSize: 12,
    color: colorScheme === "dark" ? colors.blue[6] : colors.blue[7],
  };

  return (
    <Affix
      ref={ref}
      position={{ bottom: 0, left: 0 }}
      sx={{
        width: 40,
        height: 145,
      }}
    >
      <Transition transition="slide-right" mounted={hovered}>
        {(transitionStyles) => (
          <Paper
            shadow="sm"
            p={4}
            bg={fn.rgba(colors.blue[7], 0.25)}
            sx={{
              backdropFilter: "blur(3px)",
              width: "fit-content",
              marginLeft: "auto",
            }}
            style={transitionStyles}
          >
            <MediaQuery largerThan="xs" smallerThan="sm" styles={highlight}>
              <Box sx={boxStyles}>xs</Box>
            </MediaQuery>
            <MediaQuery largerThan="sm" smallerThan="md" styles={highlight}>
              <Box sx={boxStyles}>sm</Box>
            </MediaQuery>
            <MediaQuery largerThan="md" smallerThan="lg" styles={highlight}>
              <Box sx={boxStyles}>md</Box>
            </MediaQuery>
            <MediaQuery largerThan="lg" smallerThan="xl" styles={highlight}>
              <Box sx={boxStyles}>lg</Box>
            </MediaQuery>
            <MediaQuery largerThan="xl" styles={highlight}>
              <Box sx={boxStyles}>xl</Box>
            </MediaQuery>
          </Paper>
        )}
      </Transition>
    </Affix>
  );
}
