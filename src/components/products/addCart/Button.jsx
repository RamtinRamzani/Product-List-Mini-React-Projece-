import React, { useState } from 'react';
import Styles from './addCart.module.css';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className={Styles.button}>
      Add
      <Link to="/AddPage" />
    </div>
  );
};

export { Button };
