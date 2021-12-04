import { useContext } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
  const { count, addCount, reduceCount } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={reduceCount}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button className={styles.buttonAdd} onClick={addCount}>
        +
      </button>
    </div>
  );
};
