"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import styles from "./FeaturedDishes.module.css";

const DISHES = [
  {
    id: 1,
    emoji: "🥩",
    name: "Seared Wagyu Tenderloin",
    desc: "Prime A5 wagyu, truffle jus, seasonal vegetables",
    price: "$78",
    rating: "4.9",
    reviews: 124,
    tags: ["GF"],
  },
  {
    id: 2,
    emoji: "🦞",
    name: "Butter Poached Lobster",
    desc: "Cold-water lobster, saffron beurre blanc, caviar",
    price: "$95",
    rating: "4.8",
    reviews: 89,
    tags: ["GF"],
  },
  {
    id: 3,
    emoji: "🍄",
    name: "Wild Mushroom Risotto",
    desc: "Porcini, truffle oil, aged parmesan, micro herbs",
    price: "$42",
    rating: "4.7",
    reviews: 203,
    tags: ["V", "GF"],
  },
];

export default function FeaturedDishes({ onAddToCart }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>CHEF&apos;S SELECTION</p>
        <h2 className={styles.title}>Featured Dishes</h2>
        <div className={styles.rule} />
      </div>

      <motion.div
        className={styles.grid}
        variants={gridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {DISHES.map((dish) => (
          <motion.div
            key={dish.id}
            className={styles.card}
            variants={cardVariants}
          >
            <div className={styles.imgArea}>
              <span className={styles.imgEmoji}>{dish.emoji}</span>
              <div className={styles.imgOverlay} />
            </div>

            <div className={styles.info}>
              <div className={styles.metaRow}>
                <div>
                  <div className={styles.name}>{dish.name}</div>
                  <p className={styles.desc}>{dish.desc}</p>
                </div>
              </div>

              <div className={styles.meta}>
                <div className={styles.price}>{dish.price}</div>
                <div className={styles.rating}>
                  ★ {dish.rating} · {dish.reviews} reviews
                </div>
              </div>

              <div className={styles.badges}>
                {dish.tags.map((tag) => {
                  if (tag === "V") {
                    return (
                      <span key={tag} className={styles.badgeV}>
                        V
                      </span>
                    );
                  }
                  if (tag === "GF") {
                    return (
                      <span key={tag} className={styles.badgeGF}>
                        GF
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                type="button"
                className={styles.addBtn}
                onClick={() => {
                  if (typeof onAddToCart === "function") {
                    onAddToCart(dish);
                  }
                }}
              >
                Add to order
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.footer}>
        <Link href="/menu" className={styles.viewAll}>
          View Full Menu →
        </Link>
      </div>
    </section>
  );
}

