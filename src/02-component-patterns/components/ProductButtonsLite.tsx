
import { CSSProperties } from 'react';
import styles from  '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
  counter: number;
  isMaxCountReached: boolean;
  increaseBy: () => void;
  decreaseBy: () => void;
  reset: () => void;
  
}

export const ProductButtonsLite = ({counter, isMaxCountReached, increaseBy, decreaseBy, reset, style={}, className= ''}:Props) => {
  return (
    <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button 
        className={styles.buttonMinus}
        onClick={decreaseBy}
      >
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        disabled={isMaxCountReached}
        className={`${styles.buttonAdd} ${isMaxCountReached && styles.disabled}`}
        onClick={increaseBy}
        >
        +
      </button>

      <button
        className={`${styles.buttonAdd}`}
        style={{fontSize: '14px', width: '70px', borderRadius:'8px', marginLeft:'15px'}}
        onClick={reset}
        >
        Reset
      </button>
    </div>
  )
}
