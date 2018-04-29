import React from "react"
import BestStylesHeet from "./Popup.scss"
import GoogleMapDrawFilter from "react-google-map-draw-filter";
import {MdClose} from 'react-icons/lib/md'

import google from 'google-maps'

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
getPoints(){

}

updateHeatmap(markers){

  this.heatmap.set('data', this.getPoints());
}
getMapHandle(){
  var ref = this.refs.fmapdraw
  var gmaps = ref.state.google.maps;
  var map = ref.state.map;
  this.heatmap =  gmaps.visualization.HeatmapLayer({
          data: this.getPoints(),
          map: map
        });
}
render() {
  //setTimeout(this.getMapHandle.bind(this),1000)
  var {hotels, google} = this.props;
  var lat_cen = hotels.reduce((acum,hot)=>acum+parseFloat(hot.location.latitude),0)/hotels.length;
      var lon_cen = hotels.reduce((acum,hot)=>acum+parseFloat(hot.location.longitude),0)/hotels.length;
      var center= new google.maps.LatLng(lat_cen,lon_cen);
  return(
<GoogleMapDrawFilter
  ref="fmapdraw"
  mapConfig={{
		zoom:14,
		lat:lat_cen,
		lng:lon_cen,

	}}
  width="100%" height="100%"
apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
drawMode={true}
markers={this.state.markers}
heatMap = {true}
mapStyle={{height: 400, width: 700}}
handleReturnedMarkers={(args)=>{this.props.onSelect(args); this.updateHeatmap(args).bind(this)}}
/>
);
  }
}


class Popup extends React.Component {
  render() {
    var {google}=this.props;
    if (this.props.open){
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <MyBestMap hotels={this.props.hotels} onSelect={this.props.onSelect} google={google}/>
        <MdClose onClick={this.props.onClose} />
        </div>
      </div>
    );
  }
  return null;
}
}

export default Popup;
