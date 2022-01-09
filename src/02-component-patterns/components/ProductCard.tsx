import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import { ProductImage, ProductTitle, ProductButtons} from "../components/"

import styles from  '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  const data: ProductContextProps = {
    counter,
    increaseBy,
    product
  }

  return (
    <Provider value={data}>
      <div className={styles.productCard}>
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