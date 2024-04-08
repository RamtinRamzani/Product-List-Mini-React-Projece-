import React from 'react';
import Styles from './productsList.module.css';

const Description = ({ desc }) => {
  return <span className={Styles.title}>{desc}</span>;
};

export { Description };
