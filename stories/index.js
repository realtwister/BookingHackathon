import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import MapContainer from './MapContainer';
import Popup from './Popup';
import Welcome from './Welcome';
import MyBestMap from './MyBestMap';

storiesOf('Welcome', module)
.add('to Storybook', () => (
      <Welcome showApp={linkTo('Button')}/>
      ));

storiesOf('Button', module)
.add('with text', () => (
      <Button onClick={action('clicked')}>Hello Button</Button>
      ))
.add('with some emoji', () => (
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      ));

storiesOf('MapContainer', module)
.add('example', () => (
      <MapContainer></MapContainer>));

storiesOf('isInPolygon', module)
.add('isInPolygon', (Points,Polygon) => (
      <MyBestMap></MyBestMap>))

import {ListItem} from '../src/app/components/search/List/List.jsx';
//import Button from './Button';
//import Welcome from './Welcome';

/*storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));*/

storiesOf('Slider', module)
  .add('Parent', ()=>(<Parent/>));

var hotel = {
    address: 'Keizersgracht 713 - 715, Amsterdam City Centre, Amsterdam',
    review_score_word: 'Good',
    hotel_currency_code: 'EUR',
    postcode: '1017 DX',
    photo: 'https://q-xx.bstatic.com/images/hotel/max500_watermarked_standard_bluecom/79b/79b30a50ce232b91b4c5bf8cf6223e1653b3e9b4.jpg',
    checkin_time: {
      from: '14:00',
      until: ''
    },
    cc_required: true,
    price: 161,
    location: {
      longitude: '4.89844556897879',
      latitude: '52.3640545225574'
    },
    hotel_url: 'https://www.booking.com/hotel/nl/armada.en.html?aid=881855&checkin=2018-07-27&checkout=2018-07-28&room1=A',
    country: 'nl',
    hotel_amenities: [
      'paid_parking',
      '24_hour_front_desk',
      'non_smoking_rooms',
      'internet_services',
      'elevator',
      'luggage_storage',
      'wireless_lan',
      'free_wifi_internet_access_included',
      'all_public_and_private_spaces_non_smoking',
      'private_parking'
    ],
    hotel_name: 'Armada Hotel',
    hotel_id: 10007,
    deep_link_url: 'booking://hotel/10007?checkout=2018-07-28&checkin=2018-07-27&affiliate_id=881855',
    review_score: 7.2,
    cvc_required: false,
    review_nr: 1334,
    default_language: 'en',
    stars: '3'
};

storiesOf('Card', module)
  .add('Static', ()=>(<div style={{width:750}}><ListItem hotel={hotel} /></div>));

storiesOf('Popup', module)
.add('example2', () => (
      <Popup></Popup>));
