
import { ProductCard, ProductImage, ProductTitle, ProductButtonsLite} from "../components/";

import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0];
export const ShoppingPage = () => {

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

          <ProductCard 
            key={product.id}
            product={product}
            className="bg-dark text-white border-gray-medium"
            initialValues={{
              count: 4,
              maxCount: 10
            }}
          >
            {
              ({count, isMaxCountReached, reset, increaseBy, }) => (
                <>
                  <ProductImage className="custom-image"/>
                  <ProductTitle className="text-bold"/>
                  {/* <ProductButtons className="custom-buttons"/> */}
                  <ProductButtonsLite 
                    className="custom-buttons"
                    counter={count} 
                    isMaxCountReached={isMaxCountReached} 
                    increaseBy={() => increaseBy(+2)}
                    decreaseBy={() => increaseBy(-2)}
                    reset={reset}
                  />

                </>
              )
            }
          </ProductCard>

  
    </div>
  )
}
