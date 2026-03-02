"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar({ cartCount = 0, onMenuOpen }) {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        className={styles.hamburger}
        onClick={onMenuOpen}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

      <Link href="/" className={styles.logo}>
        AHAR
      </Link>

      <div className={styles.desktopLinks}>
        <Link href="/menu">Menu</Link>
        <Link href="/reservations">Reservations</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className={styles.icons}>
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Search"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="15"
              y1="15"
              x2="20"
              y2="20"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Favorites"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 20.5s-5.5-3.2-8.2-6C1.5 11.9 2 8.5 4.3 6.7 6.1 5.3 8.7 5.7 10 7.4 11.3 5.7 13.9 5.3 15.7 6.7 18 8.5 18.5 11.9 16.2 14.5 13.5 17.3 12 20.5 12 20.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Cart"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7 7h12l-1.2 7.2c-.1.8-.8 1.3-1.6 1.3H9.8c-.8 0-1.5-.6-1.6-1.3L7 7z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9.5 7V5.5A2.5 2.5 0 0 1 12 3h0a2.5 2.5 0 0 1 2.5 2.5V7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </button>
      </div>
    </motion.nav>
  );
}

