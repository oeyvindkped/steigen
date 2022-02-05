/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";

import { Menu, Inbox } from "@mui/icons-material";
import logo from "../../../public/logos/logo-bw.png";
import {
  IconButton,
  SwipeableDrawer,
  List,
  Divider,
  Box,
  ListItem,
  ListItemIcon,
} from "@mui/material";

const MenuItems = [
  {
    link: "/about",
    text: "Om oss",
  },
  {
    link: "/gallery",
    text: "Galleri",
  },
  {
    link: "/booking",
    text: "Booking",
  },
  {
    link: "/guestbook",
    text: "Gjesteboka",
  },
];
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {MenuItems.map((item) => (
          <ListItem button key={item.link}>
            <Link href={item.link}>
              <a>{item.text}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className={styles.mobileNav}>
      <Image src={logo} width={100} height={100} />

      <IconButton onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </header>
  );
}
