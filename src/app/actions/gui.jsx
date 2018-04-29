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

export const setFilter = (filter, value) => ({
  type: SET_FILTER,
  filter,
  value
});


export const calculateOrder = () => (dispatch, getState) => {
  var hotels = getState().api.hotels;
  dispatch(setOrder(Object.keys(hotels)));
};
