import React from 'react';
import './List.scss';
import {features_display} from '../Filter/FilterList.jsx'
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

class ListItem extends React.Component
{
  constructor(props)
  {
    super(props)
    this.hotel = props.hotel
  }

  render()
  {
    return(<div className="item">
      <div className="thumb">
        <img src={this.hotel.photo} width ="200px" />
      </div>
      <div className="content">
        <div className="row">
          <div className="title">
            <h2>
              {this.hotel.hotel_name}
            </h2>
            <div className="address">
              <MdLocationOn />
              <span>
              Chefchaouene - bekijk kaart</span>
              <MdDirectionsWalk />
              <span>1,4 km van het centrum</span>
            </div>
          </div>
          <div>
            Properties:
            <ul>
              {features_display.map(([key,val])=>{if (this.hotel.hotel_amenities.indexOf(key) > -1) {return(<li key={key}>{val}</li>)}})}
            </ul>
            Price: &euro;{parseFloat(this.hotel.price).toFixed(2)}
          </div>
          <ScoreWidget score={this.hotel.review_score} reviews={this.hotel.review_nr} />
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
