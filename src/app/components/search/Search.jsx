import React from 'react';
import style from './search.scss';

import SearchBlock from '../../containers/SearchBlock';
import Filter from '../../containers/Filter';
import MapFilter from './MapFilter/MapFilter';
import List from './List/List';

const Search = ({hotels,loading}) => (
    <div className="search">
      <div className="sidebar">
        <SearchBlock />
        <Filter />
        <MapFilter />
      </div>
      <div className="main Area">
        <h2>Results</h2>
        <List hotels={hotels} loading = {loading}/>
      </div>
    </div>
  );

export default Search;
