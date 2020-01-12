/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* API Methods
*/

import Base from './base';

export const API = {
    getCurrentWeather: (city) => {
        return Base.get(`${city}CurrentWeather.json`);
    },
    get5DaysWeather: (city) => {
        return Base.get(`${city}5DaysWeather.json`);
    },    
}
