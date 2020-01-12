
/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Get Load Data
*/

import { city, storage } from '../enums';
import { cookie } from './cookie';
import has from 'lodash/has';

export const getLoadData = () => {
    let cityByCookie = cookie.get(storage.city);

    /*
    * has is lodash function
    * @param1 {Object} 
    * @param2 {String} 
    * If object contains string return true.
    */
    if(!has(city, cityByCookie)) {
        cityByCookie = city.istanbul.value;
        cookie.set(storage.city, city.istanbul.value);
    }

    return cityByCookie;
};
