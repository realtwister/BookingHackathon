import React from 'react';
import style from './PriceSlider.scss';
import MultiSlider from "multi-slider";
import { AreaChart, Area, YAxis, ReferenceLine, ReferenceDot } from 'recharts';

var xs = [...Array(200).keys()].map(x => 5*x)

class PriceSlider extends React.Component
{
  constructor()
  {
    super()
    this.state = {}
  }

  componentDidMount()
  {
    this.update_plot([100,100,800]);
  }

  update_plot(values)
  {
    var set_point = values[0]
    var set_height = .75
    var width = 10 / values[1]
    var x0 = set_point - Math.log(1 / set_height - 1) / width
    var ys = this.calc_ys(xs, width, x0)
    var tmp_data = []
    for (var i = 0; i < ys.length; i++)
    {
      tmp_data.push({name:xs[i], uv:ys[i]})
    }
    this.setState({data:tmp_data, x_value_slider: parseInt(set_point/5)});
    this.props.onChange([width, x0]);
  }

  calc_ys(xs, width, x0)
  {
    return xs.map(x => 1 / (1 + Math.exp(width * (x - x0))))
  }

  render()
  {
    return(
      <div className = 'priceslider_container'>
         <div className = 'priceslider_graph'>
           <AreaChart width={150} height={40} data={this.state.data}>
             <ReferenceLine x={this.state.x_value_slider} stroke = "blue" strokeDasharray="3 3"/>
             <ReferenceDot x={this.state.x_value_slider + 20} y = {1} stroke = "red" r = {0} label = {"€" + this.state.x_value_slider*5}/>
             <YAxis type = "number" domain = {[0,1]} hide = {true}/>
             <Area type="monotone" dataKey="uv" stroke="#8884d8"/>
           </AreaChart>
         </div>
         <div className = 'priceslider_slider'>
           <MultiSlider defaultValues = {[100,100,800]} onChange = {this.update_plot.bind(this)}/>
         </div>
         <div className = "priceslider_values">
          <div className = "priceslider_minvalue">&euro;0</div>
          <div className = "priceslider_maxvalue">&euro;1000</div>
         </div>
       </div>
    )
  }
};

export default PriceSlider;
