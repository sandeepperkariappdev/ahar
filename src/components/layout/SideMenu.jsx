"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SideMenu.module.css";

const ACCOUNT_ITEMS = [
  { icon: "📦", label: "Order History", desc: "View past orders" },
  { icon: "❤️", label: "Favourites", desc: "Saved dishes" },
  { icon: "⭐", label: "Loyalty Rewards", desc: "Points, tiers & redemption" },
  { icon: "📝", label: "My Reviews", desc: "Ratings you've submitted" },
];

const EXPLORE_ITEMS = [
  {
    icon: "🍽",
    label: "Our Menu",
    desc: "Starters, mains, desserts & more",
    href: "/menu",
  },
  {
    icon: "📅",
    label: "Reservations",
    desc: "Book a table",
    href: "/reservations",
  },
  {
    icon: "⭐",
    label: "Guest Reviews",
    desc: "See what diners are saying",
  },
  {
    icon: "📍",
    label: "Contact & Location",
    desc: "Find us · Opening hours",
  },
];

const SETTINGS_ITEMS = [
  {
    icon: "🔔",
    label: "Notifications",
    desc: "Order updates & offers",
  },
  {
    icon: "❓",
    label: "Help & Support",
    desc: "FAQs & contact support",
  },
];

export default function SideMenu({
  isOpen,
  onClose,
  isLoggedIn,
  userName = "",
}) {
  const initialLetter =
    isLoggedIn && userName && typeof userName === "string"
      ? userName.trim().charAt(0).toUpperCase()
      : "👤";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className={styles.drawer}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className={styles.drawerHeader}>
              <button
                type="button"
                className={styles.closeBtn}
                aria-label="Close menu"
                onClick={onClose}
              >
                ×
              </button>

              <div className={styles.avatar}>{initialLetter}</div>
              <div className={styles.userName}>
                {isLoggedIn ? userName || "Guest" : "Guest"}
              </div>
              <div
                className={`${styles.userSub} ${
                  isLoggedIn ? styles.tier : ""
                }`}
              >
                {isLoggedIn ? "Gold Member" : "Sign in to access rewards"}
              </div>
            </div>

            {isLoggedIn && (
              <>
                <div className={styles.sectionLabel}>ACCOUNT</div>
                <div className={styles.rule} />
                {ACCOUNT_ITEMS.map((item) => (
                  <div key={item.label} className={styles.menuLink}>
                    <div className={styles.linkIcon}>{item.icon}</div>
                    <div className={styles.linkText}>
                      <div className={styles.linkLabel}>{item.label}</div>
                      <div className={styles.linkDesc}>{item.desc}</div>
                    </div>
                    <div className={styles.chevron}>›</div>
                  </div>
                ))}
              </>
            )}

            <div className={styles.sectionLabel}>EXPLORE</div>
            <div className={styles.rule} />
            {EXPLORE_ITEMS.map((item) => {
              const content = (
                <>
                  <div className={styles.linkIcon}>{item.icon}</div>
                  <div className={styles.linkText}>
                    <div className={styles.linkLabel}>{item.label}</div>
                    <div className={styles.linkDesc}>{item.desc}</div>
                  </div>
                  <div className={styles.chevron}>›</div>
                </>
              );

              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={styles.menuLink}
                    onClick={onClose}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div key={item.label} className={styles.menuLink}>
                  {content}
                </div>
              );
            })}

            <div className={styles.sectionLabel}>SETTINGS</div>
            <div className={styles.rule} />
            {SETTINGS_ITEMS.map((item) => (
              <div key={item.label} className={styles.menuLink}>
                <div className={styles.linkIcon}>{item.icon}</div>
                <div className={styles.linkText}>
                  <div className={styles.linkLabel}>{item.label}</div>
                  <div className={styles.linkDesc}>{item.desc}</div>
                </div>
              </div>
            ))}

            <div className={styles.drawerFooter}>
              {isLoggedIn ? (
                <button type="button" className={styles.signOutBtn}>
                  Sign Out
                </button>
              ) : (
                <button type="button" className={styles.signInBtn}>
                  Sign In / Create Account
                </button>
              )}
              <div className={styles.version}>Ahar · v1.0.0</div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

