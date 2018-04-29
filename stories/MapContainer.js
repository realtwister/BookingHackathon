import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import isInside from 'point-in-polygon';
import {data} from './data';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {triangleCoords: [], drawMode: false};
  }

  isHotelInArea(x, y) {
    let polygon=[];
    this.state.triangleCoords.forEach(coord=>{
        polygon.push([coord.lat,coord.lng]);
        });
    if (isInside([x,y],polygon)) {
      return true;
    } else {
      return false;
    } 
  }



  mapClicked(mapProps, map, clickEvent) {
    if(!this.state.drawMode) {
      return;
    }
    this.setState({triangleCoords: [...this.state.triangleCoords, 
        {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}]});
  }
  toggleClicked() {
    this.setState({drawMode: !this.state.drawMode});
    this.refs.myMap.refs.map.style.cursor = "crosshair";
    this.refs.myMap.refs.map.style.cursor = "crosshair";
  }

  showHotelsInArea() {
    console.log("show hotels...");
    let hotelsInArea = [];
    for(var i=0; i<data.result.length; i++) {
      if(this.isHotelInArea(data.result[i].location.latitude, data.result[i].location.longitude)) {
        hotelsInArea.push(data.result[i]); 
        console.log("nee: " + data.result[i].hotel_name);
      } else {
        console.log("ja: " + data.result[i].hotel_name);
      }
    }
  }

  render() {
    return (
        <div>
        <button name="bestButton" onClick={this.showHotelsInArea.bind(this)}>Show hotels</button>
        <label><input value="Enable drawing" type="checkbox" onClick={this.toggleClicked.bind(this)} />Enable drawing</label>
        <Map google={this.props.google} zoom={14}
        onClick={this.mapClicked.bind(this)}
        ref="myMap" style={{cursor: 'crosshair'}}>
        <Polygon
        paths={this.state.triangleCoords}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
        fillColor="#0000FF"
        fillOpacity={0.35}/>
        </Map>
        </div>
        );
  }
}

export default GoogleApiWrapper({
apiKey: "AIzaSyA1h8DIDQNC6lHJDkrZj6_Wexsjj8nDbVI" 
})(MapContainer)
