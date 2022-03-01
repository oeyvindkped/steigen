import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Header.module.css";
import logo from "../../../public/logos/logo-pink.png";

export const WebHeader = () => {
  return (
    <header>
      <nav>
        <ul className={styles.webNav}>
          <li>
            <Link href="/about">
              <a>Om oss</a>
            </Link>
          </li>
          <li>
            <Link href="/booking">
              <a>Booking</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Galleri</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <Image src={logo} width={200} height={200} alt="Steigen logo" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/activities">
              <a>Aktiviter</a>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <a>Historie</a>
            </Link>
          </li>
          <li>
            <Link href="/guestbook">
              <a>Hytteboka</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default WebHeader;
