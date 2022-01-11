import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductImage, ProductTitle, ProductButtons} from "../components/"

import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import styles from  '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className = '', style, value = 0, onChange }: Props) => {
  const { counter, increaseBy } = useProduct( { product, value, onChange } );

  const data: ProductContextProps = {
    counter,
    increaseBy,
    product
  }

  return (
    <Provider value={data}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
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