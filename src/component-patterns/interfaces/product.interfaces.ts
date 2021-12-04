import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductCardContext {
  product: Product;
  count: number;
  addCount: () => any;
  reduceCount: () => any;
}

export interface ProductCardHOC {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
  Image: ({
    img,
    alt,
  }: {
    img?: string | undefined;
    alt?: string | undefined;
  }) => JSX.Element;
}
