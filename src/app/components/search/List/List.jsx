import React from 'react';
import './List.scss';

const ScoreWidget = ({score, reviews}) =>(
  <span class="ScoreWidget">
    <span class="review-score-widget__body">
      <span class="title">
        Beoordeling
      </span>
    <span class="body">
      {reviews} beoordelingen
    </span>
    </span>
    <span class="badge">
    6,0
    </span>
  </span>
)

const ListItem = ({hotel})=>(
  <div className="item">
    <div className="thumb">
      <img src={hotel.photo} width ="200px" />
    </div>
    <div className="content">
      <h2>
        {hotel.hotel_name}
      </h2>
    </div>
  </div>
)

const List = ({hotels, loading})=> (
  <div className="list">
    {loading && "Loading loading loading..."}
    {!loading && hotels.map(hotel => (<ListItem key={hotel.hotel_id} hotel={hotel} />))}
  </div>
)

export default List;
