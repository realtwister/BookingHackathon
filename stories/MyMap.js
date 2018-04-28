import React, {Component} from 'react';
import GoogleMapDrawFilter from "react-google-map-draw-filter";

const markers = [{info:' Marker1',icon:'image/icon.jpg', label:'A',
  latLng:{lng:2.13815342634916,lat:41.39485570794}},
{info:' Marker2', label:'B',latLng:{lng:2.13815342634926,lat:41.39485570795}}];

class MyMap extends Component {
  componentDidMount() {
  }

  handleReturnedMarkers() {
  }
  render() {
    return (
        <div>
        <GoogleMapDrawFilter
        apiKey='AIzaSyA1h8DIDQNC6lHJDkrZj6_Wexsjj8nDbVI'
        drawMode={true} //boolean that toggles draw mode (optional) 
        markers={markers} //Require latLng key with lat and lng properties 
        handleReturnedMarkers={this.handleReturnedMarkers.bind(this)} //Callback 
        //fired when polygon is closed with the markers within the polygon as first argument 
        />               
        </div>
        );
  }
}
export default MyMap;
