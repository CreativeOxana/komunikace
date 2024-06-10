import { useState } from 'react';
import './style.css';

export const Product = ({ image, name, price, onSelectPrice }) => {
  const [showPrice, setShowPrice] = useState(false);

  const togglePrice = () => {
    setShowPrice(!showPrice);
    onSelectPrice(price);
  };
  return (
    <div className="product" onClick={togglePrice}>
      <img src={image} className="product__image" alt={name} />
      <div className="product__body">
        {name}
        {showPrice && <div className="product__price">{price} Kč</div>}
      </div>
    </div>
  );
};
