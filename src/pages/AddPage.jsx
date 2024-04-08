import React, { Fragment } from 'react';
import { AddCart } from '../components/products/addCart/AddCart.jsx';
import Styles from '../components/products/addCart/secondButton.module.css';
import { Link } from 'react-router-dom';
const AddPage = () => {
  return (
    <Fragment>
      <AddCart />
      <div className={Styles.button}>
        Back To Home
        <Link to="/" />
      </div>
    </Fragment>
  );
};

export { AddPage };
