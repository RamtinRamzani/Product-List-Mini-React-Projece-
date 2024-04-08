import React from 'react';
import Styles from './productsList.module.css';
import { Score } from './Score.jsx';
import { Description } from './Description.jsx';
import { PriceBox } from './PriceBox.jsx';

const Item = ({ score, desc, price, off, onDelete, img }) => {
  return (
    <div className={Styles.item} onClick={onDelete}>
      <div className={Styles.image}>
        <img className={Styles.picture} src={img} alt="image" />
      </div>

      <div className={Styles.description}>
        <Score score={score} />
        <Description desc={desc} />
        <PriceBox price={price} off={off} />
      </div>
    </div>
  );
};

export { Item };
