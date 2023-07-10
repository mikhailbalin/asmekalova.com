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
    <Container className={classes.wrapper}>
      <Grid>
        <Col span={12} md={6}>
          <Image src={image.src} alt="My Services" />
        </Col>
        <Col span={12} md={6}>
          <Title order={2} ta="left" className={classes.title}>
            С какими запросами я работаю
          </Title>

          <div className="abilities">
            <div className="margin-l">
              <div className="numbered-title">
                <div className="label-caps special-margin">01</div>
                <h3 className="no-margin">Project Management</h3>
              </div>
              <p>
                Guiding a project from the beginning through the middle to the
                end
              </p>
            </div>
            <div className="margin-l">
              <div className="numbered-title">
                <div className="label-caps special-margin">02</div>
                <h3 className="no-margin">Creative copywriting</h3>
              </div>
              <p>
                A good piece of copy is very dependent on the message you are
                trying to send.
              </p>
            </div>
            <div>
              <div className="numbered-title">
                <div className="label-caps special-margin">03</div>
                <h3 className="no-margin">Project Management</h3>
              </div>
              <p>
                When you build a website, you have very powerful marketing
                collateral that you can use to get more business than you ever
                thought possible.
              </p>
            </div>
          </div>

          {/* <Accordion
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
          </Accordion> */}
        </Col>
      </Grid>
    </Container>
  );
}
