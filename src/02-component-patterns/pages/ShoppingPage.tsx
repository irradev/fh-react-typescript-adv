import { ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components/";

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      <ProductCard 
        product={product}
        className="bg-dark text-white border-gray-medium"
      >
        <ProductCard.Image className="custom-image" 
          style={{
            boxShadow: '5px 5px 1px rgb(16 209 92 / 37%)',
            padding: '0px',
            margin: '10px'
          }}/>
        <ProductCard.Title title="Taza Develooper de Porcelana" className="text-bold"/>
        <ProductCard.Buttons className="custom-buttons"/>
      </ProductCard >

      <ProductCard 
        product={product}
        className="bg-dark text-white border-gray-medium"
      >
        <ProductImage className="custom-image"/>
        <ProductTitle className="text-bold"/>
        <ProductButtons className="custom-buttons"/>
      </ProductCard>

      <ProductCard 
        product={product}
        style={{
          backgroundColor: '#70D1F8'
        }}
      >
        <ProductImage 
          className="custom-image"
          style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            padding: '0px',
            margin: '10px'
          }}
        />
        <ProductTitle 
          className="text-bold" title="Taza Vintage Color Negro"
          style={{
            textDecoration: 'underline'
          }}
        />
        <ProductButtons  style={{
          display: 'flex',
          justifyContent: 'end'
        }}/>
      </ProductCard>

      </div>
    </div>
  )
}
