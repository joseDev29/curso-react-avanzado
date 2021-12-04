import { createContext } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  ProductCardContext,
  ProductCardProps,
} from "../interfaces/product.interfaces";

export const ProductContext = createContext({} as ProductCardContext);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { count, addCount, reduceCount } = useProduct();

  return (
    <Provider value={{ product, count, addCount, reduceCount }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
