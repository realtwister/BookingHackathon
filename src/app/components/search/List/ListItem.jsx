import React from 'react';
import {feature_db} from '../Filter/FilterList.jsx'
import {MdLocationOn,MdDirectionsWalk} from 'react-icons/lib/md'
import { BarChart, YAxis, Bar, LabelList, ReferenceLine, Tooltip} from 'recharts';


const ScoreWidget = ({score, reviews}) =>(
  <span className="ScoreWidget">
    <div className="body">
      <span className="title">
        Beoordeling
      </span>
      <span className="text">
        {reviews} beoordelingen
      </span>
    </div>
    <span className="badge">
    {score}
    </span>
  </span>
)

import {connect} from 'react-redux';

const PropertyBadge = ({filter, name}) => {
    filter = 0.3*(filter>0)+0.7*filter/5;
    var style = {
        background: 'rgba(0,53,128,'+filter+')',
        color: filter>0? '#fff': '#383838'
    }
    return(
        <div className ="propertyBadge" style={style}>
            {name}
        </div>
    );
}

const PropBadge = connect((state, {db})=> {
  return({
  filter: state.gui.filters[db]
})},null)(PropertyBadge);
const CustTooltip = (props)=>{
        return (<ReferenceLine
            {...props.refProps}
            y={props.payload[0].value}
            stroke="rgb(102, 102, 102)"
            display="block"
            strokeDasharray="5 5" />)
    }


class ListItem extends React.Component{
    render (){
    var {hotel} = this.props;
    var maxprice = hotel.time_windows.reduce((acum,[ci,co,p])=>p<acum? acum:p,0);
    return(<div className="listitem">
      <div className="thumb">
        <img src={hotel.photo} width ="200px" />
      </div>
      <div className="content">
        <div className="row">
          <div className="title">
            <h2>
              {hotel.hotel_name}
            </h2>
            <div className="address">
              <MdLocationOn />
              <span>
              {hotel.address}</span>
            </div>
          </div>
          <ScoreWidget score={hotel.review_score} reviews={hotel.review_nr} />
        </div>
        <div className="row">
          <div className="properties">
              {feature_db.map(([db,key,val])=>{if (hotel.hotel_amenities.indexOf(key) > -1) {return(<PropBadge key={key} db={db} name={val} />)}})}
          </div>
        </div>
        <div className="row chart">
          <BarChart width={600} height={100} data={hotel.time_windows.map(([ci,co,p]) => {return {name:ci.slice(5), price:p}})}>
            <YAxis axisLine={false}>
            </YAxis>
            <ReferenceLine
                ref='referenceline'
                y={maxprice}
                display="none"
                stroke="rgb(102, 102, 102)"
                strokeDasharray="5 5" />
            <Tooltip offset={30} cursor={<CustTooltip refProps={this.refs.referenceline&&this.refs.referenceline.props}/>} />
            <Bar dataKey="price" fill="rgba(0,53,128,0.5)" >
              <LabelList dataKey="name" position="top" />
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>)
}}

export default ListItem
