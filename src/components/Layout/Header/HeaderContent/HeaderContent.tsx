import { Menu, Center, Container, Group, rem, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { Button } from "@components/components/Button";
import { Burger } from "@components/components/Burger";
import { useStyles } from "./HeaderContent.styles";

interface HeaderContentProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export const HeaderContent = React.memo(({ links }: HeaderContentProps) => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>

          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Drawer opened={opened} onClose={toggle} position="top">
        {items}
      </Drawer>

      <Container className={classes.container} fluid id="Container">
        <Group className={classes.group} position="apart">
          <Button>Book a Call</Button>
          <Burger opened={opened} onClick={toggle} />
        </Group>
      </Container>
    </>
  );
});

HeaderContent.displayName = "HeaderContent";
