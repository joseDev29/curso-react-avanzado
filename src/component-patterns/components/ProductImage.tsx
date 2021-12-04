import { useContext } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import NoImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "", alt = "" }) => {
  const { product } = useContext(ProductContext);
  let src = img || product.img || NoImage;
  return <img className={styles.productImg} src={src} alt={alt} />;
};
