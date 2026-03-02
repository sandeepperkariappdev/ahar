"use client";

import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        <span>🍽 NOW OPEN FOR DINE-IN &amp; TAKEAWAY · BOOK YOUR TABLE TODAY</span>
        <span>🍽 NOW OPEN FOR DINE-IN &amp; TAKEAWAY · BOOK YOUR TABLE TODAY</span>
      </div>
    </div>
  );
}

