import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  product,
  value = 0,
  onChange,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value); // éstas funciones ya están memorizadas por defecto
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
