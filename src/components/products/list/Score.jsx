import React from 'react';
import Styles from './productsList.module.css';

const Score = ({ score }) => {
  return (
    <p className={Styles.score}>
      {score} <span className={Styles.pi}>⭐</span>
    </p>
  );
};

export { Score };
