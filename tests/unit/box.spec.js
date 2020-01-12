/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Box Component Unit Test 
*/

import { shallowMount } from '@vue/test-utils';
import Box from '../../src/gui/components/box';

describe('Should render Box : ', () => {
    it('renders slots when passed', () => {
        const html = '<div>Hello World</div>'
        const wrapper = shallowMount(Box,   
            {
                slots: {
                    default: html
                }
            }
        )
        expect(wrapper.html()).toBe(`<div class="box">${html}</div>`);
    });
})
