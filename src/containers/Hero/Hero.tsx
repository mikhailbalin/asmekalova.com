import { Title, Container, Text } from "@mantine/core";
import { useStyles } from "./Hero.styles";
import Image from "next/image";
import image from "./3X5A5956-1.jpg";

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>Психолог</div>
        <Title className={classes.title}>Анастасия Смекалова</Title>
        <Text>Провожу индивидуальные и групповые онлайн-консультации.</Text>
        <div className={classes.imageWrapper}>
          <Image
            src={image}
            alt="Picture of the author"
            className={classes.image}
            width={700}
            height={475}
            sizes="100vw"
          />
        </div>
      </Container>
    </div>
  );
}
