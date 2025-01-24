import React, { useState } from 'react';
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer'
import image from './assets/jacket.webp';
import image2 from './assets/catJ.webp'
import image3 from './assets/conjunto3.jpg'
import image4 from './assets/conjunto.jpg'
import image5 from './assets/conjunto2.jpg'


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalItems((prevTotal) => prevTotal + product.quantity);
  };

  const removeFromCart = (index) => {
    const removedItem = cartItems[index];
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setTotalItems((prevTotal) => prevTotal - removedItem.quantity);
  };

  return (
    <>
    <div className="products">
      <Header 
  totalItems={totalItems} 
  cartItems={cartItems} 
  removeFromCart={removeFromCart} 
/>
    <h1 className="title">Lançamentos para seu Pet</h1>

    <Product
          name="Jaqueta Para Gatos"
          details="Disponivel nas cores marrom e preto"
          price={89.99}
          image={image2}
          addToCart={addToCart}
        />

        <Product
          name="Agasalho Pet"
          details="Para cachorros de porte pequeno.Disponivel em diversas cores"
          price={69.99}
          image={image3}
          addToCart={addToCart}
        />
        <Product
          name="Agasalho Pet"
          details="Para cães. Disponivel em diversas cores"
          price={79.99}
          image={image4}
          addToCart={addToCart}
        />
        <Product
          name="Agasalho Pet"
          details="Para cães. Disponivel em diversas cores"
          price={89.99}
          image={image5}
          addToCart={addToCart}
        />
          <Product
          name="Jaqueta Pet"
          details="Para gatos. Disponivel em diversas cores"
          price={79.99}
          image={image}
          addToCart={addToCart}
        />
        
       <Footer/>
     
      </div>
    </>
  );
};

export default App;