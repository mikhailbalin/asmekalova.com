import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck, IconHeartFilled } from "@tabler/icons-react";
import { useStyles } from "./About.styles";
import { CapsLabel } from "@components/components";
// import image from "./image.svg";

export function About() {
  const { classes } = useStyles();
  return (
    <Container
      sx={{
        backgroundColor: "#e6ddd9",
        paddingTop: rem(50),
      }}
    >
      <div className={classes.inner}>
        <div className={classes.content}>
          <CapsLabel>Обо мне</CapsLabel>
          <Text>
            Привет! Меня зовут Анастасия Смекалова, я - дипломированный
            психолог-консультант. В своей работе использую комплексный подход,
            методы и техники из разных подходов в терапии: психоанализ,
            когнитивно-поведенческая терапия, трансактный анализ и коучинг. Это
            помогает работать с запросами на глубинном уровне, разматывать
            клубок и искать причины внутренних проблем, выводить их на
            осознанный уровень, прорабатывать на уровне чувств и сознания,
            переписывать нерабочие сценарии мышления и поведения и интегрировать
            это в настоящее, для более качественной и эффективной жизни{" "}
            <IconHeartFilled size={rem(16)} className={classes.icon} />
          </Text>

          {/* <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(12)} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List> */}

          {/* <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group> */}
        </div>
        {/* <Image src={image.src} className={classes.image} /> */}
      </div>
    </Container>
  );
}
