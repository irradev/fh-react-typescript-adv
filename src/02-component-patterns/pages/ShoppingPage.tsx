
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components/";
import { useShoppingCart } from "../hooks/useShoppingCart";

import { products } from "../data/products";
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      {
        products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            className="bg-dark text-white border-gray-medium"
            onChange={ onProductCountChange }
            value = {shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold"/>
            <ProductButtons className="custom-buttons"/>
          </ProductCard>
        ))
      }

      <div className="shopping-cart">
        {
          // Object.keys(shoppingCart).map(id => (
          //   <ProductCard 
          //     key={id}
          //     product={shoppingCart[id]}
          //     className="bg-dark text-white border-gray-medium"
          //     style={{ width: '100px'}}
          //   >
          //     <ProductImage className="custom-image"/>
          //     <ProductButtons className="custom-buttons"/>
          //   </ProductCard>
          // ))
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard 
              key={key}
              product={product}
              className="bg-dark text-white border-gray-medium"
              style={{ width: '100px'}}
              onChange={ onProductCountChange }
              value={product.count}
            >
              <ProductImage className="custom-image"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ))
        }

      </div>


      </div>
    </div>
  )
}
