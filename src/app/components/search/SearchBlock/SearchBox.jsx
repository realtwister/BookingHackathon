import React from 'react';
import style from './SearchBlock.scss';

const SearchBox = ({onChange}) => (
  <div className="SearchBox">
      <span>Bestemming:</span>
      <input type="text"/>
  </div>
);

export default SearchBox;
