import React from 'react';
import Styles from './search.module.css';

const SearchBox = () => {
  return (
    <div className={Styles.searchBox}>
      <input
        type="search"
        className={Styles.search}
        placeholder="search the largest shopping list 🔎"
      />
    </div>
  );
};

export { SearchBox };
