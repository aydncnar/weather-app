/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Select Scripts 
*/

import { city } from  '../../../enums';

export default {
  name: 'Select',
  data: function () {
    return {
      cities: city,
    }
  },
  props: {
      handleOnChange: Function,
      selected: String,
      options: Object
  },
  methods: {
      change() {
          this.handleOnChange(this.$refs['input'].value);
      }
  }
}