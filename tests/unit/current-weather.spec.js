/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Current Weater Component Unit Test 
*/

import { shallowMount } from '@vue/test-utils';
import CurrentWeather from '../../src/gui/components/current-weather';
import current from './mock/current.json';

describe('Should render CurrentWeather : ', () => {
    it('renders empty when loading', () => {
        const wrapper = shallowMount(CurrentWeather,   
            {
                propsData: { 
                    loading: true,
                }
            }
        )
        expect(wrapper.isEmpty()).toBe(true);
    });

    it('renders props.data when passed', () => {
        const wrapper = shallowMount(CurrentWeather,   
            {
                propsData: { 
                    loading: false,
                    data: current,
                    city: 'İstanbul'
                }
            }
        )
        expect(wrapper.isEmpty()).not.toBe(true);
    });    
})
