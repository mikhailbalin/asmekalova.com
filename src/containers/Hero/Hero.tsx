import Image from "next/image";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import { useStyles } from "./Hero.styles";
import image from "./3X5A5956-1.jpg";

export function Hero() {
  const { classes, cx } = useStyles();

  return (
    // <div className={classes.wrapper}>
    // <Overlay color="#000" opacity={0.65} zIndex={1} />

    // <div className={classes.inner}>
    <Container>
      <Title className={classes.title}>
        I am Anastasiia Smekalova. Практикующий психолог, провожу индивидуальные
        и групповые онлайн-консультации
      </Title>

      <Image
        src={image}
        alt="Picture of the author"
        className={classes.image}
        width={700}
        height={475}
        sizes="100vw"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

      {/* <Text className={classes.description} mb={90}>
            практикующий психолог{" "}
          </Text>
          <Text size="lg" className={classes.description}>
            Провожу индивидуальные и групповые онлайн-консультации
          </Text> */}
    </Container>

    //  <div className={classes.controls}>
    //       <Button className={classes.control} variant="white" size="lg">
    //         Get started
    //       </Button>
    //       <Button
    //         className={cx(classes.control, classes.secondaryControl)}
    //         size="lg"
    //       >
    //         Live demo
    //       </Button>
    //     </div>
    //    </div>
    //  </div>
  );
}
