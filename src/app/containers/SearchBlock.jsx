import Component from '../components/search/SearchBlock/SearchBlock.jsx';

import { connect} from 'react-redux';
import {searchHotels} from '../actions/api.jsx';

export default connect((state)=>({

}), dispatch => ({
  onSearch: query =>dispatch(searchHotels(query))
}))(Component)
