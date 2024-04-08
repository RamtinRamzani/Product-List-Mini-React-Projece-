import React from 'react';
import Styles from './products.module.css';
import { SearchBox } from './search/SearchBox.jsx';
import { ProductHeader } from './ProductHeader.jsx';
import { ProductsList } from './list/ProductsList.jsx';
import { Button } from './addCart/Button.jsx';

const ProductsChildren = () => {
  const open = () => {
    console.log('hello');
  };
  return (
    <div className={Styles.productsChildren}>
      <SearchBox />
      <ProductHeader />
      <ProductsList />
      <Button />
    </div>
  );
};

export { ProductsChildren };
