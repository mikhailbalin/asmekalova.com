import React from "react";
import { useStyles } from "./Process.styles";
import {
  Timeline,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconReceiptOff,
    title: "Free and open source",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: IconFileCode,
    title: "TypeScript based",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: IconCircleDotted,
    title: "No annoying focus ring",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: IconFlame,
    title: "Flexible",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

export function Process() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            A fully featured React components library for your next project
          </Title>
          <Text c="dimmed">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Col>
        <Col span={12} md={7}>
          {/* <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid> */}
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconGitBranch size={12} />}
              title="New branch"
            >
              <Text color="dimmed" size="sm">
                You&apos;ve created new branch{" "}
                <Text variant="link" component="span" inherit>
                  fix-notifications
                </Text>{" "}
                from master
              </Text>
              <Text size="xs" mt={4}>
                2 hours ago
              </Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
              <Text color="dimmed" size="sm">
                You&apos;ve pushed 23 commits to
                <Text variant="link" component="span" inherit>
                  fix-notifications branch
                </Text>
              </Text>
              <Text size="xs" mt={4}>
                52 minutes ago
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Pull request"
              bullet={<IconGitPullRequest size={12} />}
              lineVariant="dashed"
            >
              <Text color="dimmed" size="sm">
                You&apos;ve submitted a pull request
                <Text variant="link" component="span" inherit>
                  Fix incorrect notification message (#187)
                </Text>
              </Text>
              <Text size="xs" mt={4}>
                34 minutes ago
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Code review"
              bullet={<IconMessageDots size={12} />}
            >
              <Text color="dimmed" size="sm">
                <Text variant="link" component="span" inherit>
                  Robert Gluesticker
                </Text>{" "}
                left a code review on your pull request
              </Text>
              <Text size="xs" mt={4}>
                12 minutes ago
              </Text>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Grid>
    </div>
  );
}
