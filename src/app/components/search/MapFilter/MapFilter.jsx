import React from 'react';
import {Map,GoogleApiWrapper} from 'google-maps-react';
import './MapFilter.scss';



const MapFilter = ({google}) => (
  <div className="mapFilter">
    <Map google={google} zoom={14} width="100%" height="100%" disableDefaultUI={true} options={()=>({panControl: false,
      mapTypeControl: false, fullScreen:false, disableDefaultUI:true})}/>
  </div>
);

export default GoogleApiWrapper({
apiKey: "AIzaSyA1h8DIDQNC6lHJDkrZj6_Wexsjj8nDbVI"
})(MapFilter);
