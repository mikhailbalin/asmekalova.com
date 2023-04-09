import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import { useStyles } from "./Hero.styles";

export function Hero() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

      <div className={classes.inner}>
        <Title className={classes.title}>
          Anastasiia{" "}
          <Text component="span" inherit className={classes.highlight}>
            Smekalova
          </Text>
        </Title>

        <Container size={640}>
          <Text className={classes.description} mb={90}>
            практикующий психолог{" "}
          </Text>
          <Text size="lg" className={classes.description}>
            Провожу индивидуальные и групповые онлайн-консультации
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}
