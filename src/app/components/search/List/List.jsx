import React from 'react';
import './List.scss';

const ListItem = ({hotel})=>(
  <div className="item">
    {hotel.price}
  </div>
)

const List = ({hotels})=> (
  <div className="list">
    {hotels.map(hotel => (<ListItem key={hotel.hotel_id} hotel={hotel} />))}
  </div>
)

export default List;
