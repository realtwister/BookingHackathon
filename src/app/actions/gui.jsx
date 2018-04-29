import {features_api} from '../components/search/Filter/FilterList.jsx'

export const SET_ORDER = "SET_ORDER";
export const LOADING = "LOADING";
export const SET_FILTER = "SET_FILTER";

export const setOrder = (order) => ({
  type: SET_ORDER,
  order
});

export const loading = () => ({
  type: LOADING
})

function calc_y(x, width, x0)
{
  return 1 / (1 + Math.exp(width * (x - x0)));
}

function calc_score(hotel, filters)
{
  var score
  var score = parseFloat(hotel.review_score) * 10;
  if (isNaN(score)) {score = Math.random() * 50 + 50;}
  for (var name in filters)
  {
    if (name == 'MapSelector')
    {
      if (filters[name].indexOf(hotel.hotel_id) == -1)
      {
        score -= 10000;
      }
    }
    else if (name == 'price')
    {
      score += calc_y(parseFloat(hotel.price), filters[name][0], filters[name][1]) * 100;
    }
    else
    {
      for (var [feature,api_key] of features_api)
      {
        if (name == feature)
        {
          var tmp = (hotel.hotel_amenities.indexOf(api_key) > -1 ? 1 : 0)
          score += tmp * parseFloat(filters[name]) * 20;
        }
      }
    }
  }
  return score;
}

const doSetFilter = (filter, value) => ({
  type: SET_FILTER,
  filter,
  value
});

export const setFilter = (filter, value) => (dispatch, getState) => {
  dispatch(doSetFilter(filter,value));
  dispatch(calculateOrder());
};

export const calculateOrder = () => (dispatch, getState) => {
  var hotels = getState().api.hotels;
  var filters = getState().gui.filters;
  var tmp = Object.entries(hotels).map(([id,hotel]) => [id,calc_score(hotel, filters)]);
  tmp = tmp.sort(function(a,b){return b[1] - a[1]});
  dispatch(setOrder(tmp.map(([id,hotel]) => id)));
};
