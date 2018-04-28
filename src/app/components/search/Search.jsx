import React from 'react';
import style from './search.scss';

import SearchBlock from './SearchBlock/SearchBlock';
import Filter from './Filter/Filter';
import List from './List/List';

var hotels = {"meta":{"ruid":"UmFuZG9tSVYkc2RlIyh9YdS9J5dHPNiDAY3m9AipKVJvfIMnQGeA11qW85bDRUrsHesDxDfWUwUNfVvx4rnoN3LpqeSGHY4SILxnXx1Ue/0="},"result":[{"price":207,"deep_link_url":"booking://hotel/35569?checkin=2018-07-27&affiliate_id=881855&checkout=2018-07-28","hotel_id":35569,"hotel_currency_code":"AUD"},{"deep_link_url":"booking://hotel/659343?checkin=2018-07-27&affiliate_id=881855&checkout=2018-07-28","price":179,"hotel_id":659343,"hotel_currency_code":"AUD"},{"deep_link_url":"booking://hotel/257694?checkin=2018-07-27&checkout=2018-07-28&affiliate_id=881855","price":221,"hotel_id":257694,"hotel_currency_code":"AUD"},{"hotel_currency_code":"AUD","price":299,"deep_link_url":"booking://hotel/37571?checkin=2018-07-27&checkout=2018-07-28&affiliate_id=881855","hotel_id":37571},{"hotel_currency_code":"AUD","price":155,"deep_link_url":"booking://hotel/273342?affiliate_id=881855&checkout=2018-07-28&checkin=2018-07-27","hotel_id":273342},{"hotel_id":414870,"price":125,"deep_link_url":"booking://hotel/414870?checkin=2018-07-27&checkout=2018-07-28&affiliate_id=881855","hotel_currency_code":"AUD"},{"price":233.1,"deep_link_url":"booking://hotel/37961?checkin=2018-07-27&affiliate_id=881855&checkout=2018-07-28","hotel_id":37961,"hotel_currency_code":"AUD"},{"hotel_currency_code":"AUD","deep_link_url":"booking://hotel/320658?affiliate_id=881855&checkout=2018-07-28&checkin=2018-07-27","price":206.1,"hotel_id":320658},{"hotel_id":1960154,"price":110,"deep_link_url":"booking://hotel/1960154?checkout=2018-07-28&affiliate_id=881855&checkin=2018-07-27","hotel_currency_code":"AUD"},{"hotel_id":431894,"deep_link_url":"booking://hotel/431894?affiliate_id=881855&checkout=2018-07-28&checkin=2018-07-27","price":160,"hotel_currency_code":"AUD"},{"hotel_id":2347391,"price":195,"deep_link_url":"booking://hotel/2347391?checkout=2018-07-28&affiliate_id=881855&checkin=2018-07-27","hotel_currency_code":"AUD"},{"deep_link_url":"booking://hotel/273344?affiliate_id=881855&checkout=2018-07-28&checkin=2018-07-27","price":145,"hotel_id":273344,"hotel_currency_code":"AUD"},{"hotel_id":1364721,"deep_link_url":"booking://hotel/1364721?checkin=2018-07-27&checkout=2018-07-28&affiliate_id=881855","price":134.1,"hotel_currency_code":"AUD"},{"hotel_id":434806,"price":125,"deep_link_url":"booking://hotel/434806?affiliate_id=881855&checkout=2018-07-28&checkin=2018-07-27","hotel_currency_code":"AUD"},{"hotel_currency_code":"AUD","deep_link_url":"booking://hotel/319081?checkin=2018-07-27&checkout=2018-07-28&affiliate_id=881855","price":145,"hotel_id":319081},{"hotel_currency_code":"AUD","hotel_id":460208,"price":132,"deep_link_url":"booking://hotel/460208?checkin=2018-07-27&affiliate_id=881855&checkout=2018-07-28"},{"hotel_currency_code":"AUD","hotel_id":3096272,"deep_link_url":"booking://hotel/3096272?affiliate_id=881855&checkout=2018-07-28&checkin=2018-07-27","price":400},{"hotel_currency_code":"AUD","hotel_id":1054105,"deep_link_url":"booking://hotel/1054105?checkout=2018-07-28&affiliate_id=881855&checkin=2018-07-27","price":165}]};

const Search = () => (
    <div className="search">
      <div className="sidebar">
        <SearchBlock />
        <Filter />
      </div>
      <div className="main Area">
        <h2>Results</h2>
        <List hotels={hotels.result} />
      </div>
    </div>
  );

export default Search;
