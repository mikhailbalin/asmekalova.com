import { Title, Container, Text } from "@mantine/core";
import { useStyles } from "./Hero.styles";
import Image from "next/image";
import image from "./3X5A5956-1.jpg";
import { ArrowLink } from "@components/components";

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>Психолог</div>
        <Title className={classes.title}>Анастасия Смекалова</Title>
        <Text mb={14}>
          Провожу индивидуальные и групповые онлайн-консультации.
        </Text>
        <ArrowLink href="#contacts">Связаться со мной</ArrowLink>
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
