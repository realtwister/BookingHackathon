import React from 'react';
import './List.scss';
import ListItem from './ListItem.jsx';

const List = ({hotels, loading})=> (
  <div className="list">
    {loading && "Loading loading loading..."}
    {!loading && hotels.map(hotel => (<ListItem key={hotel.hotel_id} hotel={hotel} />))}
  </div>
)

export default List;
