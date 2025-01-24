import React from 'react';
import './styles.css';

export const Cart = ({ cartItems, removeFromCart }) => {

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const showCartItems = () => {
  
    if (cartItems.length === 0) {
      return <p>Seu carrinho está vazio.</p>;
    }

    return cartItems.map((item, index) => (
      <div key={index} className="cart-item">
         <img src= {item.image} alt={item.name} className="cart-item-image"  />
         <section className='items'>
        <p><span>Produto:</span> {item.name}</p>
        <p><span>Quantidade:</span> {item.quantity}</p>
        <p><span>Preço: R$</span> {(item.price * item.quantity).toFixed(2)}</p>
        </section>
        <div className="btn">
        <button 
        className="remove-btn"
        onClick={() => removeFromCart(index)}>Remover
        </button>
        </div>
      
      </div>
    ));
  };

  return (
    <div className="cart-container">
      <h2>Carrinho</h2>
      {showCartItems()}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p>
            Total: <strong>R$ {total.toFixed(2)}</strong>
          </p>
          <button 
        className="comprar-btn"
        onClick={() => removeFromCart(index)}>Finalizar Compra
        </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

