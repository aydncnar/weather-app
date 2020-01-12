/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* API Base Method
*/

import axios from 'axios';

export default axios.create({
  baseURL: 'https://raw.githubusercontent.com/ardatasci/frontend-recruitment-task/master/',
});
