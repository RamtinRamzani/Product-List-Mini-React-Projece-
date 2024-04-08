import React from 'react';
import Styles from './productsList.module.css';

const PriceBox = ({ price, off }) => {
  return (
    <div className={Styles.priceBox}>
      <span className={Styles.price}>
        <span className={Styles.priceFake}>{price}</span>
        <span className={Styles.priceOrg}>{off}</span>
      </span>
      <button className={Styles.addToCart}>Add to cart</button>
    </div>
  );
};

export { PriceBox };
