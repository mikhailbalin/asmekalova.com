import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";
import { useStyles } from "./Services.styles";
import image from "./arif-rasheed-Hu8ziyxzedY-unsplash.jpg";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export function Services() {
  const { classes } = useStyles();
  return (
    <Container size="lg" className={classes.wrapper}>
      <Grid>
        <Col span={12} md={6}>
          <Image src={image.src} alt="Frequently Asked Questions" />
        </Col>
        <Col span={12} md={6}>
          <Title order={2} ta="left" className={classes.title}>
            My Services
          </Title>

          <Accordion
            chevronPosition="right"
            defaultValue="reset-password"
            variant="separated"
          >
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>
                How can I reset my password?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>
                Can I create more that one account?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>
                How can I subscribe to monthly newsletter?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>
                Do you store credit card information securely?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>
                What payment systems to you work with?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Grid>
    </Container>
  );
}
