import React from 'react';
import Styles from './products.module.css';
import { ProductsChildren } from './productsChildren.jsx';

const Products = () => {
  return (
    <div className={Styles.products}>
      <ProductsChildren />
    </div>
  );
};

export { Products };
