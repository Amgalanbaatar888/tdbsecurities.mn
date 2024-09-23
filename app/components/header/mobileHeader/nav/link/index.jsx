import styles from "../link/style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { label, link, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(link);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={link}>{label}</Link>
    </motion.div>
  );
}
