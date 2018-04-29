import Component from '../components/search/MapFilter/MapFilter.jsx';

import { connect} from 'react-redux';
import {setFilter} from '../actions/gui';

export default connect((state)=>({
  hotels:  Object.values(state.api.hotels),
}), dispatch => ({
  onSelect: (markers)=>{
    var ids = markers.map(m => m.hotel_id);
    dispatch(setFilter('MapSelector', ids));
  }
}))(Component)
