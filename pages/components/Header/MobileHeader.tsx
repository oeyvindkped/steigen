import React from "react";
import Image from "next/image";
import styles from "../../../styles/Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../public/logos/logo-bw.png";

export const WebHeader = () => {
  return (
    <header className={styles.mobileNav}>
      <Image src={logo} width={100} height={100} />
      <MenuIcon />
    </header>
  );
};

export default WebHeader;
