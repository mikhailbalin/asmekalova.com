import { Title, Container } from "@mantine/core";
import { useStyles } from "./Hero.styles";
import Image from "next/image";
import image from "./3X5A5956-1.jpg";

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Title className={classes.title}>
          I am Anastasiia Smekalova. Практикующий психолог, провожу
          индивидуальные и групповые онлайн-консультации
        </Title>

        <Image
          src={image}
          alt="Picture of the author"
          className={classes.image}
          width={700}
          height={475}
          sizes="100vw"
        />
      </Container>
    </div>
  );
}
