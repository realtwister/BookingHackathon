import React from 'react';
import { find_hotels, hotels } from './APIinterface';
import { update_list } from './List'

const Slider = ({ onChange, id, min, max, std_value}) => (
  <input type="range" min={min} max={max} id={id} defaultValue={std_value}
    onChange={onChange}
  />
);

export default Slider;
