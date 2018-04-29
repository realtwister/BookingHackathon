export const REPLACE_HOTELS = "ADD_HOTELS";


export const replaceHotels = (hotels)=>({
  type: REPLACE_HOTELS,
  hotels
});

const getCity = (query) => {
  return fetch("https://distribution-xml.booking.com/2.1/json/autocomplete?language=en;text="+query, {
    headers: {
      "Authorization": 'Basic ' + btoa('booking_hackathon_ichack18:WorkingAtBooking.com2018')
    }
  }).then( response =>{
    if (response.status != 200){
    console.log("Error in request");
    console.log(response);
    return
    }
  return response.json().then(json=>{
    return json.result.filter((val)=>val.type == 'city')[0];
  })
})}


import {calculateOrder, loading} from './gui.jsx';
export const searchHotels = (query)=> (dispatch,getState)=> {
  return getCity(query.query).then(city => {
    if (city ===undefined){
      dispatch(loading());
      dispatch(replaceHotels([]));
      dispatch(calculateOrder());
      return;
    }
 fetch("https://distribution-xml.booking.com/2.1/json/hotelAvailability?checkin=2018-07-27&checkout=2018-07-28&city_ids="+city.id+ "&room1=A&extras=hotel_details,hotel_amenities", {
      headers: {
        "Authorization": 'Basic ' + btoa('booking_hackathon_ichack18:WorkingAtBooking.com2018')
      }
    }).then(response=>{
      if (response.status != 200){
        console.log("Error in request");
        console.log(response);
        return
      }
      return response.json().then(json=>{
        dispatch(loading());
        dispatch(replaceHotels(json.result));
        dispatch(calculateOrder());
      })
    });
  });
};
