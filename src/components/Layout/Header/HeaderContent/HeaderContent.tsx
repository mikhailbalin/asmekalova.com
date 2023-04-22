import { Menu, Center, Container, Group, rem, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { Button } from "@components/components/Button";
import { Burger } from "@components/components/Burger";
import { useStyles } from "./HeaderContent.styles";
import { HeaderLink } from "./HeaderLink";

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
            <HeaderLink link={link.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </HeaderLink>
          </Menu.Target>

          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <HeaderLink key={link.label} link={link.link}>
        {link.label}
      </HeaderLink>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={toggle}
        position="top"
        lockScroll={false}
        withCloseButton={false}
        classNames={{
          root: classes.drawerRoot,
          body: classes.drawerBody,
          content: classes.drawerContent,
        }}
        transitionProps={{
          duration: 400,
        }}
      >
        {items}
      </Drawer>

      <Container className={classes.container}>
        <Group className={classes.group} position="apart">
          <Button>Book a Call</Button>
          <Group className={classes.links}>{items}</Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} />
        </Group>
      </Container>
    </>
  );
});

HeaderContent.displayName = "HeaderContent";
