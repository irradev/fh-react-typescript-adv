import { useEffect, useRef, useState } from "react";
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
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    setCounter((prev) => Math.max(prev + value, 0));
  };

  useEffect(() => {
    setCounter(value); // éstas funciones ya están memorizadas por defecto
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
