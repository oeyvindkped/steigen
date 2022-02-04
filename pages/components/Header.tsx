import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
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
            <Link href="/activites">
              <a>Aktiviter</a>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <a>Historie</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
