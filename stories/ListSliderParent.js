import React from 'react';
import Slider from './Slider';
import List from './List';
import { get_hotel_list, find_hotels } from './APIinterface';

function start_finding_hotels()
{
  find_hotels({'checkin':'2018-07-27','checkout':'2018-07-28','city_ids':-1565670,'room1':'A,A','extras':'hotel_amenities,hotel_details'}).then(update_list)
}

function update_list()
{
  var obj = document.getElementById('list')
  obj.innerHTML = ''
  var hotels = get_hotel_list()
  if (hotels.length == 0)
  {
    obj.innerHTML = 'This list is empty.'
  }
  else
  {
    var objs = []
    for (let hotel of hotels)
    {
      objs.push([get_hotel_div(hotel), get_hotel_score(hotel)])
    }
    objs.sort(function(a,b){return a[1] - b[1];})
    for (let hotel_obj of objs)
    {
      obj.append(hotel_obj[0])
    }
  }
}

function get_hotel_score(hotel)
{
  var price_difference = Math.abs(document.getElementById('ideal_price').value - hotel.price)
  var price_importance = document.getElementById('ideal_price_importance').value
  var free_parking = (hotel.hotel_amenities.indexOf("free_parking") > -1)
  var free_parking_importance = document.getElementById('free_parking_importance').value
  return price_difference / 20 * price_importance + free_parking * free_parking_importance
}

function get_hotel_div(hotel)
{
  var div = document.createElement('div')
  div.innerHTML = Object.entries(hotel).map(([e,v]) => e + " : " + v).join('<br>')
  return div
}

const ListSliderParent = () =>
(
  <div>
    <button onClick={start_finding_hotels}>Find hotels</button>
    <table>
      <thead>
        <tr><td>Feature:</td><td>Preferred value:</td><td>Importance:</td></tr>
      </thead>
      <tbody>
        <tr>
          <td>Ideal price (0 - 2000)</td>
          <td><Slider onChange={update_list} id = {"ideal_price"} min = {0} max = {2000} std_value = {0}/></td>
          <td><Slider onChange = {update_list} id = {"ideal_price_importance"} min = {0} max = {100} std_value = {0}/></td>
        </tr>
        <tr>
          <td>Parking (-100 - 100)</td>
          <td><Slider onChange={update_list} id = {"free_parking"} min = {0} max = {100} std_value = {0}/></td>
          <td><Slider onChange = {update_list} id = {"free_parking_importance"} min = {0} max = {100} std_value = {0}/></td>
        </tr>
      </tbody>
    </table>
    <List/>
  </div>
)

export default ListSliderParent;
