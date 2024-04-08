import React, { Fragment } from 'react';
import { Products } from '../components/products/Products.jsx';

const MainPage = () => {
  return (
    <Fragment>
      <Products />
      {/* <Filter /> */}
    </Fragment>
  );
};

export { MainPage };
