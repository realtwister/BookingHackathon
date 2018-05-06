const state = {
  gui: {
    order: [
      '10003'
    ],
    loading: false,
    filters: {
      price: [
        0.023696682464454975,
        491.36143858179423
      ],
      parking: 5,
      '24hr': 3,
      MapSelector: []
    }
  },
  api:{
    hotels:{
  '10003': {
    country: 'nl',
    hotel_url: 'https://www.booking.com/hotel/nl/asterisk.en.html?aid=881855&checkin=2018-05-06&checkout=2018-05-09&room1=A',
    address: 'Den Texstraat 16, Amsterdam City Centre, Amsterdam',
    hotel_amenities: [
      'paid_parking',
      '24_hour_front_desk',
      'garden',
      'non_smoking_rooms',
      'internet_services',
      'elevator',
      'luggage_storage',
      'wireless_lan',
      'free_wifi_internet_access_included',
      'all_public_and_private_spaces_non_smoking',
      'daily_maid_service',
      'wifi_everywhere'
    ],
    checkin_time: {
      until: '',
      from: '15:00'
    },
    deep_link_url: 'booking://hotel/10003?checkout=2018-05-09&affiliate_id=881855&checkin=2018-05-06',
    review_score: 8.6,
    hotel_currency_code: 'EUR',
    cvc_required: false,
    default_language: 'en',
    stars: '3',
    hotel_name: 'Hotel Asterisk 3 star superior',
    review_score_word: 'Fabulous',
    postcode: '1017 ZA',
    location: {
      latitude: '52.3588347328288',
      longitude: '4.89386737346649'
    },
    photo: 'https://q-xx.bstatic.com/images/hotel/max500_watermarked_standard_bluecom/55c/55cc2111b4e0517bde51d840dd966b4b4629c1ac.jpg',
    review_nr: 1800,
    cc_required: true,
    hotel_id: 10003,
    price: 477,
    time_windows: [
      [
        '2018-05-06',
        '2018-05-09',
        477
      ],
      [
        '2018-05-07',
        '2018-05-10',
        504
      ],
      [
        '2018-05-08',
        '2018-05-11',
        571.5
      ],
      [
        '2018-05-09',
        '2018-05-12',
        604.8
      ],
      [
        '2018-05-10',
        '2018-05-13',
        703.8
      ],
      [
        '2018-05-11',
        '2018-05-14',
        613.8
      ],
      [
        '2018-05-12',
        '2018-05-15',
        549
      ],
      [
        '2018-05-16',
        '2018-05-19',
        643.5
      ],
      [
        '2018-05-17',
        '2018-05-20',
        684
      ],
      [
        '2018-05-18',
        '2018-05-21',
        634.5
      ],
      [
        '2018-05-19',
        '2018-05-22',
        598.5
      ],
      [
        '2018-05-20',
        '2018-05-23',
        502.2
      ],
      [
        '2018-05-21',
        '2018-05-24',
        495.9
      ]
    ]
  }
}
  }
}

export default state;
