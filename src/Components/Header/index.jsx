import { useState } from 'react';
import { FaShoppingCart, FaShippingFast } from 'react-icons/fa';
import { MdPets } from "react-icons/md";
import {Cart} from '../Cart';
import './styles.css';

export const Header = ({ totalItems, cartItems, removeFromCart }) => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const toggleCart = () => {
      setIsCartVisible(!isCartVisible);
    };
  return (
    <>
    <div className="header">
      <MdPets color="white" className="pet-icon"/>
      <p className="logo">Baby.com</p>
      <div className="icons-container">
      <div className="icons">
        <FaShoppingCart onClick={toggleCart}/>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
      <div className="icons">
        <FaShippingFast />
        </div>
      </div> 
    </div>
    {isCartVisible && (
        <div className="cart-modal">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      )}
    </>
  )
}

export default Header
