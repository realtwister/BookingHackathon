import React from 'react';
import {Map,GoogleApiWrapper} from 'google-maps-react';
import './MapFilter.scss';
import Popup from './Popup';

class MapFilter extends React.Component {
  constructor(){
    super();
    this.state = {open:false};
  }

  togglePopup(){
    this.setState({open: !this.state.open});
  }
  render(){
    var {hotels, google, onSelect} = this.props;
    var lat_cen = hotels.reduce((acum,hot)=>acum+parseFloat(hot.location.latitude),0)/hotels.length;
    var lon_cen = hotels.reduce((acum,hot)=>acum+parseFloat(hot.location.longitude),0)/hotels.length;
    var center= new google.maps.LatLng(lat_cen,lon_cen);
    return (
      <div className="mapFilter">
      <Popup open={this.state.open} google={google} onClose = {this.togglePopup.bind(this)} onSelect={onSelect} hotels={hotels}/>
      <Map className="smallMap" onClick={this.togglePopup.bind(this)}
        center={center} google={google} zoom={14} width="100%" height="100%" disableDefaultUI={true} options={()=>({panControl: false,
        mapTypeControl: false, fullScreen:false, disableDefaultUI:true})}/>

    </div>
  );
  }
}

export default GoogleApiWrapper({
apiKey: "AIzaSyA1h8DIDQNC6lHJDkrZj6_Wexsjj8nDbVI"
})(MapFilter);
