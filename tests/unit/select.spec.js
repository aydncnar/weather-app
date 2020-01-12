/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Select Component Unit Test 
*/

import { shallowMount } from '@vue/test-utils';
import Select from '../../src/gui/components/select/select.vue';
import { city } from '../../src/enums';

describe('Should render Select : ', () => {

    const factory = (values = {}) => {
        return shallowMount(Select, values)
    }    

    it('render is successfully when null passed', () => {
        const wrapper = factory();
        expect(wrapper.findAll('option')).toHaveLength(0);
    });
    
    it('renders props.options when passed', () => {

        const wrapper = factory({
            propsData: { 
                options: city,
                selected: city.ankara.value
            }
        });

        const length = Object.keys(city).length;
        expect(wrapper.findAll('option')).toHaveLength(length);
    });
})
