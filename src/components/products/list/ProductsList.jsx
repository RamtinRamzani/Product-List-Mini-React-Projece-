import React, { Fragment, useState, useEffect } from 'react';
import Styles from './productsList.module.css';
import { Item } from './Item.jsx';

const ProductsList = () => {
  const [prList, setPrList] = useState([
    {
      desc: 'this is shoe',
      score: '4.5',
      price: '2300$',
      off: '1800$',
      img: './image/shoe.jpg',
    },
    {
      desc: 'this is bag',
      score: '3',
      price: '4000$',
      off: '3200$',
      img: './image/bag.jpg',
    },
    {
      desc: 'this is car',
      score: '3.5',
      price: '1800$',
      off: '1550$',
      img: './image/car.jpg',
    },
  ]);

  const handleDelete = (desc) => {
    setPrList(prList.filter((f) => f.desc !== desc));
  }; // if i click same as describtion i define delete it

  const onSubmit = (values) => {
    console.log('Form Submit!!!', values);
  };

  return (
    <div className={Styles.productList}>
      {prList.map((item, key) => {
        return (
          <Fragment>
            <Item
              key={key}
              desc={item.desc}
              score={item.score}
              price={item.price}
              off={item.off}
              img={item.img}
              onDelete={() => handleDelete(item.desc)}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export { ProductsList };
