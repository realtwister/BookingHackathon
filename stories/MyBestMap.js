import React from 'react'
import GoogleMapDrawFilter from "react-google-map-draw-filter";
import {data} from './data'

class MyBestMap extends React.Component { 
  constructor() {
    super();
    this.state = {markers: []};
    console.log("constructor");
  }
  componentDidMount() {
    this.calcMarkers();
  }

  calcMarkers() {
    console.log("adding markers");
    var markers = [];
    for (var marker of data.result) {
      console.log(marker.hotel_name);
      markers.push({info: marker.hotel_name, label:"A", latLng: {lat:marker.location.latitude, lng:marker.location.longitude}}) 
    }
    this.setState({markers});
  }
  render() {

    console.log(this.state.markers);
    return(
        <GoogleMapDrawFilter
        apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
        drawMode={true}
        markers={this.state.markers}
        />
        );
  }
}
export default MyBestMap;
