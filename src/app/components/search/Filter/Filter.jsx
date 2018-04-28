import React from 'react';
import style from './Filter.scss';

const FilterItem = ({name})=>(
  <div className="item">
    <div>
      <input type="checkbox" />
    </div>
    <div className="name">
      {name}
    </div>
    <div>
      7
    </div>
  </div>
)

const Filter = () => (
  <div className="filter">
    <h2>
      Filter op:
    </h2>
    <div>
      <h3>
        Uw budget:
      </h3>
      <FilterItem name="hello" />

    </div>
  </div>
);

export default Filter;
