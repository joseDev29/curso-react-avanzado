import { ProductCard } from "../components";

const { Image, Title, Buttons } = ProductCard;

const product = {
  id: "1",
  title: "Coffe mug",
  img: "/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <Image />
          <Title />
          <Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
