/*
* Aydın Çınar <cinar.aydinn@gmail.com>
* Home Page Scripts 
*/

import { API } from '../../../api';
import { getLoadData, cookie } from '../../../utils';
import { storage, city as cityList } from '../../../enums';
import {  Box, 
          Select,
          CurrentWeather,
          CurrentWeatherAdditional,
          ForeCastGraphics,
          ForeCastTable 
        } from  '../../components';

export default {
  name: 'home',
  components: {    
    Select,
    Box,
    CurrentWeather,
    CurrentWeatherAdditional,
    ForeCastGraphics,
    ForeCastTable
  },
  data: function () {
    return {
      city: '',
      cityName: '',
      cityList,
      currentWeather: {},
      forecastWeather: {},
      loading: true,
      forecastLoading: true
    }
  },  
  methods: {
    handleCityChange(city) {      
      this.city = city;      
      this.cityName = cityList[city].text;
      cookie.set(storage.city, city);
      this.fetchCurrentData();
      this.fetchForeCastData();
    },
    getCityName() {
      this.city = getLoadData();
      this.cityName = cityList[this.city].text;
    },
    fetchCurrentData() {
        API.getCurrentWeather(this.city).then(resp => {
          this.loading = false;
          this.currentWeather = resp;
        });
    },
    fetchForeCastData() {
        API.get5DaysWeather(this.city).then(resp => {
          this.forecastLoading = false;        
          this.forecastWeather = resp;
        });
    }    
  },
  mounted() {
      this.getCityName();
      this.fetchCurrentData();
      this.fetchForeCastData();
  },
}