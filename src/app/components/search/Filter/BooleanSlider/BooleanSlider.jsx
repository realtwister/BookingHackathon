import React from 'react';
import style from './BooleanSlider.scss';
import MultiSlider from "multi-slider";

const BooleanSlider = () => (
  <div className = 'slider'>
    <MultiSlider defaultValues = {[0,5]}/>
  </div>
);

export default BooleanSlider;
