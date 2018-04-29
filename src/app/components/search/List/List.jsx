import React from 'react';
import './List.scss';
import {MdLocationOn,MdDirectionsWalk} from 'react-icons/lib/md'

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

export const ListItem = ({hotel})=>(
  <div className="item">
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
            Chefchaouene - bekijk kaart</span>
            <MdDirectionsWalk />
            <span>1,4 km van het centrum</span>
          </div>
        </div>

        <ScoreWidget score={hotel.review_score} reviews={hotel.review_nr} />
      </div>
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
