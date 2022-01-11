import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        // console.log(
        //   ...Object.keys(oldShoppingCart)
        //     .filter(id => id !== product.id)
        //     .map(
        //       id => { return {[`${id}`]: oldShoppingCart[id]} }
        //     )
        // )
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
