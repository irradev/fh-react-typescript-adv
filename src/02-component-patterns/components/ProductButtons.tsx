import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from  '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({className = '', style}: Props) => {

  const {counter, maxCount, increaseBy} = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]);

    // const isMaxReached = !!maxCount && counter === maxCount;

  return (
    <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button 
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
        >
        +
      </button>
    </div>
  )
}
