import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {triangleCoords: []};
  }
  mapClicked(mapProps, map, clickEvent) {
    console.log("Latitude: "+clickEvent.latLng.lat()+" "+", longitude: "+clickEvent.latLng.lng());
    this.setState({triangleCoords: [...this.state.triangleCoords, 
        {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}]});
  }

  render() {
    return (
        <Map google={this.props.google} zoom={14}
        onClick={this.mapClicked.bind(this)}>
        <Polygon
        paths={this.state.triangleCoords}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
        fillColor="#0000FF"
        fillOpacity={0.35} />
        </Map>
        );
  }
}

export default GoogleApiWrapper({
apiKey: "AIzaSyA1h8DIDQNC6lHJDkrZj6_Wexsjj8nDbVI" 
})(MapContainer)
