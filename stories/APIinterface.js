var hotels = [];

export function find_hotels(properties)
{
  URL = "https://distribution-xml.booking.com/2.1/json/hotelAvailability?" + Object.entries(properties).map(([e,v]) => e + "=" + v).join('&');
  return fetch(URL, {headers : {"Authorization" : 'Basic ' + btoa('booking_hackathon_ichack18:WorkingAtBooking.com2018')}}).then(response => response.json().then(update_hotels))
}

export function get_hotel_list()
{
  return hotels;
}

function update_hotels(hotels_obj)
{
  hotels = hotels_obj.result
}
