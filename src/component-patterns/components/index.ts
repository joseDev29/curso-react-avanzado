import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOC as ProductCardHOCInterface } from "../interfaces/product.interfaces";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHOCInterface = Object.assign(
  ProductCardHOC,
  {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons,
  }
);
