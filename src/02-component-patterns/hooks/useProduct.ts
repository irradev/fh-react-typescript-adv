import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  product,
  value = 0,
  initialValues,
  onChange,
}: useProductArgs) => {
  // console.log(initialValues);
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, 10);
    }

    if (newValue === counter) return;

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  // useEffect(() => {
  //   isMounted.current = true;
  // }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
