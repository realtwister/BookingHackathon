import React from 'react';
import './List.scss';
import {feature_db} from '../Filter/FilterList.jsx'
import {MdLocationOn,MdDirectionsWalk} from 'react-icons/lib/md'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from 'recharts';

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

const interpolateColor = (x) => "rgba(0, 255, 0,"+(x/5)+ ") ";

const PropertyBadge = ({filter, name}) => {
  var style = {};
  if (filter !== undefined){
    style = {backgroundColor: interpolateColor(filter)}
  }
  return(
    <div className ="propertyBadge" style={style}>
      {name}
    </div>
);}

const PropBadge = connect((state, {db})=> {
  return({
  filter: state.gui.filters[db]
})},null)(PropertyBadge);

export class ListItem extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    var {hotel} = this.props;
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
        <div>
        <BarChart width={200} height={200} data={hotel.time_windows.map(([ci,co,p]) => {return {name:ci + ' - ' + co, price:p}})}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
      </div>
    </div>)
  }
}

const List = ({hotels, loading})=> (
  <div className="list">
    {loading && "Loading loading loading..."}
    {!loading && hotels.map(hotel => (<ListItem key={hotel.hotel_id} hotel={hotel} />))}
  </div>
)

export default List;
