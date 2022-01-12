import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductButtonsLite } from "./ProductButtonsLite";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
export { ProductButtonsLite } from "./ProductButtonsLite";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
  ButtonsLite: ProductButtonsLite,
});

export default ProductCard;
