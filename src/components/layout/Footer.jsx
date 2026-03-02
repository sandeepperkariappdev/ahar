import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <div className={styles.brandName}>AHAR</div>
          <div className={styles.brandTagline}>
            An Exquisite Culinary Journey
          </div>
          <div className={styles.brandAddress}>
            123 Fine Dining Street, City Centre
            <br />
            Open Tue–Sun · Lunch 12–3 · Dinner 6–11
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colHeading}>EXPLORE</div>
          <div className={styles.navLinks}>
            <Link href="/menu">Menu</Link>
            <Link href="/reservations">Reservations</Link>
            <Link href="/private-dining">Private Dining</Link>
            <Link href="/gift-cards">Gift Cards</Link>
            <Link href="/about">About Us</Link>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colHeading}>CONNECT</div>
          <p className={styles.connectText}>
            Follow AHAR for seasonal menus, chef&apos;s tables, and exclusive
            member events.
          </p>
          <div className={styles.socialRow}>
            <button type="button" className={styles.socialBtn}>
              Instagram
            </button>
            <button type="button" className={styles.socialBtn}>
              Facebook
            </button>
            <button type="button" className={styles.socialBtn}>
              TripAdvisor
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © {year} AHAR. All rights reserved.
        </div>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

