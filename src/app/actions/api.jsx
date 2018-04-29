export const REPLACE_HOTELS = "ADD_HOTELS";
var moment = require('moment')

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

//var hotels = []

import {calculateOrder, loading} from './gui.jsx';
export const searchHotels = (parameters) => (dispatch,getState)=> {
  return getCity(parameters.query).then(city => {
    if (city === undefined){
      dispatch(loading());
      dispatch(replaceHotels([]));
      dispatch(calculateOrder());
      return;
    }
    var promises = []
    var checkins = []
    var checkouts = []
    var ctr = moment(parameters.datepicker.startDate)
    ctr.add(parameters.datepicker.maxDuration - 1, 'days')
    while (ctr <= parameters.datepicker.endDate)
    {
      var checkout = ctr.format("YYYY-MM-DD")
      var tmp = moment(ctr)
      tmp.add(-parameters.datepicker.maxDuration + 1, 'days')
      var checkin = tmp.format("YYYY-MM-DD")
      checkins.push(checkin)
      checkouts.push(checkout)
      promises.push(fetch("https://distribution-xml.booking.com/2.1/json/hotelAvailability?checkin="+checkin+"&checkout="+checkout+"&city_ids="+city.id+ "&room1=A&extras=hotel_details,hotel_amenities", {
          headers: {
            "Authorization": 'Basic ' + btoa('booking_hackathon_ichack18:WorkingAtBooking.com2018')
          }
        }).then(response =>
        {
          if (response.status != 200)
          {
            console.log("Error in request");
            console.log(response);
            return
          }
          return response.json()
        }));
      ctr.add(1, 'days')
    }

    Promise.all(promises).then(values =>
      {
        var hotels = {}
        for (var i = 0; i < values.length; i++)
        {
          var value = values[i]
          for (var hotel of value.result)
          {
            var hotel_id = hotel.hotel_id
            if (Object.keys(hotels).indexOf(String(hotel_id)) == -1)
            {
              hotels[hotel_id] = hotel
              hotels[hotel_id].time_windows = []
            }
            else
            {
              console.log("Multiple.")
            }
            hotels[hotel_id].time_windows.push([checkins[i], checkouts[i], hotel.price])
          }
        }
        dispatch(loading());
        dispatch(replaceHotels(hotels));
        dispatch(calculateOrder());
      }
    )
    /*for (var promise of promises)
    {
      promise.then(response =>
      {
        if (response.status != 200)
        {
          console.log("Error in request");
          console.log(response);
          return
        }
        return response.json().then(json=>
        {
          dispatch(loading());
          dispatch(replaceHotels(json.result));
          dispatch(calculateOrder());
        })
      });
    }*/
  });
};

/*.then(response=>{
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
});*/
