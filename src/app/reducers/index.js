import { combineReducers } from 'redux';

import {REPLACE_HOTELS} from '../actions/api.jsx';
import {SET_ORDER, LOADING, SET_FILTER} from '../actions/gui.jsx';

const apiReducer = (state = {hotels:{}}, action) =>{
  state = {...state};
  switch(action.type){
    case REPLACE_HOTELS:
      state.hotels = {...action.hotels.reduce((acum,hotel) => {acum[hotel.hotel_id] = hotel;  return acum;},{} )};
      break;
  }
  return state;
}

const guiReducer = (state={order:[], loading:false, filters:{}}, action) => {
  state = { ...state};
  switch(action.type){
    case SET_ORDER:
      state.order = [...action.order];
      state.loading = false;
      break;
    case LOADING:
      state.loading = true;
      break;
    case SET_FILTER:
      state.filters = {...state.filters, [action.filter]:action.value};
      break;


  }
  return state;
}


const rootReducer = combineReducers({
  gui: guiReducer,
  api: apiReducer,
});

export default rootReducer;
