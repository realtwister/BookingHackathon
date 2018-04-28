import React from 'react';
import style from './SearchBlock.scss';

import SearchBox from './SearchBox.jsx';

const Row = ({children, last})=>(
  <div className={"row"+(last? " last": "")}>
    {children}
  </div>
);

const SearchBlock = () => (
  <div className="SearchBlock">
    <h2>
      Zoek
    </h2>
    <Row>
      <SearchBox onChange />
    </Row>
    <Row last>
      <button>Zoek</button>
    </Row>
  </div>
);

export default SearchBlock;
