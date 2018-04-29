export const SET_ORDER = "SET_ORDER";
export const LOADING = "LOADING";

export const setOrder = (order) => ({
  type: SET_ORDER,
  order
});

export const loading = () => ({
  type: LOADING
})

function get_filters()
{
  var filters = {};
  var filter_items = document.getElementsByClassName('item')
  for (var i = 0; i < filter_items.length; i++)
  {
    var name = filter_items[i].children[0].innerHTML;
    if (name == "Price")
    {
      var container = filter_items[i].children[1].children[0].children[1].children[0]
      var x0 = container.children[0].getAttribute('x2')
      var width = container.children[1].getAttribute('x2')
      console.log(x0)
      console.log(width)
    }
  }
}

function calc_score(hotel)
{
  var filters = get_filters()
  return 0;
}

export const calculateOrder = () => (dispatch, getState) => {
  var hotels = getState().api.hotels;
  var tmp = Object.entries(hotels).map(([id,hotel]) => [id,calc_score(hotel)]).sort(function(a,b){a[1] - b[1]});
  dispatch(setOrder(tmp.map(([id,hotel]) => id)));
};
