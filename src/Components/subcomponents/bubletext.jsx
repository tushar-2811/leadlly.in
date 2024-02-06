import React from "react";
import styles from "./bubble.module.css";

const BubbleText = ({children}) => {
  return (
    <h2 className="text-center text-4xl font-thin text-indigo-300">
      {children.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;