import React from "react";
import { Global } from "@mantine/core";

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        body: {
          // ...theme.fn.fontStyles(),
          // backgroundColor: theme.other.colors.brand1,
          // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          // lineHeight: theme.lineHeight,
        },
      })}
    />
  );
}
