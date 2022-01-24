import { createContext, ReactElement } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductCardContext } from "../interfaces/product.interfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext({} as ProductCardContext);
const { Provider } = ProductContext;

export const ProductCard = ({ className, children, product }: Props) => {
  const { count, addCount, reduceCount } = useProduct();

  const classNameValue = `${styles.productCard} ${className}`;

  return (
    <Provider value={{ product, count, addCount, reduceCount }}>
      <div className={classNameValue}>{children}</div>
    </Provider>
  );
};
