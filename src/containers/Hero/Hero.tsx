import { Title, Container, Overlay } from "@mantine/core";
import { useStyles } from "./Hero.styles";

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Overlay color="#000" opacity={0.3} zIndex={1} />

      <Container>
        <Title className={classes.title}>
          I am Anastasiia Smekalova. Практикующий психолог, провожу
          индивидуальные и групповые онлайн-консультации
        </Title>
      </Container>
    </div>
  );
}
