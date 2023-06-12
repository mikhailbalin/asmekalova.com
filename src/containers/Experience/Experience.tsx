import React from "react";
import { useStyles } from "./Experience.styles";
import { ThemeIcon, Text, Title, Container, SimpleGrid } from "@mantine/core";
import { CapsLabel } from "@components/components";

export const EXPERIENCE_DATA = [
  {
    date: "2009 - 2013",
    title: "Бакалавр НИУ ВШЭ",
    description: "150 часов личной терапии",
  },
  {
    date: "август 2021 - декабрь 2022",
    title: "Профессиональная переподготовка на базе высшего образования",
    description:
      "1610 часов, присвоена степени практикующий психолог и психолог консультант",
  },
  {
    date: "март 2023 - октябрь 2023",
    title: "Повышение квалификации",
    description: "Работа с группами, более 100 часов практики",
  },
];

interface FeatureProps {
  date: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ date, title, description }: FeatureProps) {
  return (
    <div>
      {/* <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon> */}
      <Text
        mt="sm"
        sx={{
          marginBottom: 10,
          fontSize: 14,
          textTransform: "uppercase",
          lineHeight: "1.3em",
          letterSpacing: ".02em",
        }}
      >
        {date}
      </Text>
      <Title order={4} mb={10}>
        {title}
      </Title>
      <Text size="sm" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

interface FeaturesGridProps {
  data?: FeatureProps[];
}

export function Experience({ data = EXPERIENCE_DATA }: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container>
      {/* <Title className={classes.title}>{title}</Title>

      <Text size="sm" className={classes.description}>
        {description}
      </Text> */}

      <CapsLabel>Образование</CapsLabel>

      <SimpleGrid
        // mt={60}
        cols={3}
        spacing={40}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
