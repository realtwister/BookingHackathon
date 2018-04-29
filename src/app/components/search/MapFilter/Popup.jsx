import React from "react"
import BestStylesHeet from "./Popup.scss"
import GoogleMapDrawFilter from "react-google-map-draw-filter";
import {MdClose} from 'react-icons/lib/md'

class MyBestMap extends React.Component {
  constructor() {
    super();
    this.state = {markers: []};
  }
  componentDidMount() {
    this.calcMarkers();
  }

calcMarkers() {
  var markers = [];
  for (var marker of this.props.hotels) {
    markers.push({hotel_id: marker.hotel_id, latLng: {lat:marker.location.latitude, lng:marker.location.longitude}})
  }
  this.setState({markers});
}
render() {
  return(
<GoogleMapDrawFilter
  width="100%" height="100%"
apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
drawMode={true}
markers={this.state.markers}
mapStyle={{height: 400, width: 700}}
handleReturnedMarkers={this.props.onSelect}
/>
);
  }
}


class Popup extends React.Component {
  render() {
    if (this.props.open){
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <MyBestMap hotels={this.props.hotels} onSelect={this.props.onSelect} />
        <MdClose onClick={this.props.onClose} />
        </div>
      </div>
    );
  }
  return null;
}
}

export default Popup;
