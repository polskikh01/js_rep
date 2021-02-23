import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';

import BasketLot from '../basketLot';

import img from '../../asset/img/basket.png';

describe('<BasketLot/>', () => {
    const title = 'PRODUCT';
    const price = 'OOooOOooOoOo';
    it('Отрисовывется без ошибок', () => {
        const wrapper = mount(<BasketLot img={img} title={title} price={price} />);

        expect(wrapper).toMatchSnapshot();
    });
});
