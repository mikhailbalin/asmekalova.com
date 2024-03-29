import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: rem(120),
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));
