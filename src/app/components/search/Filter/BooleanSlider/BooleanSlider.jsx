import React from 'react';
import style from './BooleanSlider.scss';
import MultiSlider from "multi-slider";

class BooleanSlider extends React.Component
{
    update_filter(values)
    {
        this.props.onChange(values[0])
    }

    render()
    {
      return(<div className = 'slider'>
        <MultiSlider defaultValues = {[0,5]} onChange = {this.update_filter.bind(this)}/>
      </div>)
    }
};

export default BooleanSlider;
