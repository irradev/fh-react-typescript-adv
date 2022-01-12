import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductImage, ProductTitle, ProductButtons} from "../components/"

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from  '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;



export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element; 
  className?: string;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ 
  children, 
  product, 
  className = '', 
  style, 
  value, 
  initialValues,  
  onChange 
}: Props) => {
  const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct( { product, value, initialValues, onChange } );

  const data: ProductContextProps = {
    counter,
    maxCount,
    product,
    increaseBy,
  }

  return (
    <Provider value={data}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,

        })}
      </div>
    </Provider>
  )

  // return (
  //   <Provider value={data}>
  //     <div className={styles.productCard}>
  //       <ProductImage img={product.img} />
  //       <ProductTitle title={product.title}/>
  //       <ProductButtons counter={counter} increaseBy={increaseBy} />
  //     </div>
  //   </Provider>
  // )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;