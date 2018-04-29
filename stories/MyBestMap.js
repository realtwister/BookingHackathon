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

  handleReturnedMarkers(markers) {
    this.setState({
activeMarkers: markers
}); 
console.log(this.state.activeMarkers);
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
mapStyle={{height: '400', width: '700'}}
handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
/>
);
  }
}
export default MyBestMap;
