import React from 'react';
import dafuq from './Filter.scss';
import PriceSlider from './PriceSlider/PriceSlider';
import BooleanSlider from './BooleanSlider/BooleanSlider';

const FilterItem = ({name,price_slider,boolean_slider, onChange})=>(
  <div className="item">
    {price_slider ? (<div className="filter_name" style = {{width: 100}}>{name}</div>) : (<div className="filter_name">{name}</div>)}
    {price_slider ? (<div className="filter_name" style = {{width: 150}}><PriceSlider onChange={onChange}/></div>) : (<div className="filter_name"><BooleanSlider onChange={onChange}/></div>)}
  </div>
)

const Filter = ({setFilter}) => (
  <div className="filter">
    <h2>
      Apply filters:
    </h2>
    <div>
      <h3>
        Your budget:
      </h3>
      <FilterItem name="Price" onChange={setFilter('price')} price_slider/>
      <FilterItem name="Parking" onChange={setFilter('parking')} boolean_slider/>
      <FilterItem name="Air Conditioning" onChange={setFilter('airco')} boolean_slider/>
      <FilterItem name="24 hour service" onChange={setFilter('24hr')} boolean_slider/>
      <FilterItem name="Free WiFi" onChange={setFilter('wifi')} boolean_slider/>
      <FilterItem name="Sauna" onChange={setFilter('sauna')} boolean_slider/>
    </div>
  </div>
);

export default Filter;
