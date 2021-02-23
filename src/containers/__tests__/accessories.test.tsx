import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import { Provider } from 'react-redux';

import { store } from '../../__data__/store';

import Accessories from '../accessories/accessories';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер Accessories', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <Accessories />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
