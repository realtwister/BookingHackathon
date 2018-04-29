import Component from '../components/search/Search.jsx';

import { connect} from 'react-redux';

export default connect((state)=>({
  hotels: state.gui.order.slice(0,30).map(key => state.api.hotels[key]),
  loading: state.gui.loading,
}), dispatch => ({
}))(Component)
