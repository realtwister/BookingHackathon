import Component from '../components/search/Filter/Filter.jsx';

import { connect} from 'react-redux';
import {setFilter} from '../actions/gui.jsx';

export default connect((state)=>({
}), dispatch => ({
  setFilter: (filter) => (value)=>dispatch(setFilter(filter, value))
}))(Component)
