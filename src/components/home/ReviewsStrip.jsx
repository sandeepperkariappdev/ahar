"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ReviewsStrip.module.css";

const REVIEWS = [
  {
    id: 1,
    text: "An extraordinary evening. Every dish was a masterpiece — the wagyu melted on the tongue, and the service was impeccably attentive.",
    author: "Sarah M.",
    detail: "Gold Member · 12 visits",
  },
  {
    id: 2,
    text: "AHAR has redefined fine dining for our city. The ambiance, the flavours, the presentation — perfection in every sense.",
    author: "James T.",
    detail: "Verified Diner",
  },
  {
    id: 3,
    text: "We celebrated our anniversary here and it exceeded every expectation. The sommelier's wine pairing was inspired.",
    author: "Priya & Rahul K.",
    detail: "Anniversary Dinner",
  },
];

export default function ReviewsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>GUEST REVIEWS</p>
        <h2 className={styles.title}>Loved by diners</h2>
        <p className={styles.aggregate}>
          Rated <span>4.8</span> on average by <span>2,400+</span> guests
        </p>
      </div>

      <motion.div
        className={styles.grid}
        variants={gridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {REVIEWS.map((review) => (
          <motion.div
            key={review.id}
            className={styles.card}
            variants={cardVariants}
          >
            <div className={styles.quoteChar}>&quot;</div>
            <p className={styles.text}>{review.text}</p>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.author}>
              <span>{review.author}</span>
            </p>
            <p className={styles.detail}>{review.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

