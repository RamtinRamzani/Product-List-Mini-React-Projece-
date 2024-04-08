import React from 'react';
import Styles from './filter.module.css';
import { FilterChildren } from './FilterChildren.jsx';

const Filter = () => {
  return (
    <div className={Styles.filterBox}>
      <FilterChildren />
      <FilterChildren />
      <FilterChildren />
    </div>
  );
};

export { Filter };
