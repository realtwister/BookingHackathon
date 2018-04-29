import React from 'react';
import dafuq from './Filter.scss';
import PriceSlider from './PriceSlider/PriceSlider';
import BooleanSlider from './BooleanSlider/BooleanSlider';

const FilterItem = ({name,price_slider,boolean_slider})=>(
  <div className="item">
    {price_slider ? (<div className="filter_name" style = {{width: 100}}>{name}</div>) : (<div className="filter_name">{name}</div>)}
    {price_slider ? (<div className="filter_name" style = {{width: 150}}><PriceSlider/></div>) : (<div className="filter_name"><BooleanSlider/></div>)}
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
      <FilterItem name="Price" price_slider/>
      <FilterItem name="Parking" boolean_slider/>
      <FilterItem name="Air Conditioning" boolean_slider/>
      <FilterItem name="24 hour service" boolean_slider/>
      <FilterItem name="Free WiFi" boolean_slider/>
    </div>
  </div>
);

export default Filter;
