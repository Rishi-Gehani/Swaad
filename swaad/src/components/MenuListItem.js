import React from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const MenuListItem = ({ item }) => {
  const { cartItems, addToCart, decreaseQuantity } = useCart();
  const { image, name, price, description } = item;

  const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);

  return (
    <div className="menu-list-item">
      <div className="item-details">
        <h4>{name}</h4>
        <p className="item-price">₹{price}</p>
        <p className="item-description">{description}</p>
      </div>
      <div className="item-actions">
        <img src={image || 'https://via.placeholder.com/150'} alt={name} className="item-image" />
        {itemInCart ? (
          <div className="quantity-control">
            <button onClick={() => decreaseQuantity(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => addToCart(item)}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        ) : (
          <button onClick={() => addToCart(item)} className="add-button">
            Add 1 tray
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuListItem;