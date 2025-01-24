import './styles.css';
import { Button } from '../Button';
import React, { useState } from 'react';

export const Product = ({ name, details, price, image, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const product = {
      name,
      quantity,
      price,
      image,
    };
    addToCart(product);
    setQuantity(1);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={image} alt={`Imagem do produto ${name}`} />
      </div>

      <div className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-details">Descrição: {details}</p>
        <p className="product-price">R$ {price.toFixed(2)}</p>
      </div>

      <div className="product-actions">

        <div className="actions">
        <button
        className="decrease"
          type="button"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          aria-label="Diminuir quantidade" >
         -
        </button>
        <span>{quantity}</span>
        <button
         className="increase"
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          aria-label="Aumentar quantidade">
       +
        </button>
        </div>
        <Button name="Carrinho" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default Product;
