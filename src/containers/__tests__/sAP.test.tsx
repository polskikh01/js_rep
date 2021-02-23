import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import { Provider } from 'react-redux';

import { store } from '../../__data__/store';

import ShippingAndPayment from '../shippingAndPayment/shippingAndPayment';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер shippingAndPayment', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <ShippingAndPayment />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
