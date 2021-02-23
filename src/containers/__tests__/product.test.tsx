import React from 'react';
import {mount} from "enzyme";
import {describe, it, expect} from '@jest/globals'
import {Provider} from 'react-redux'

import {store} from '../../__data__/store'

import Product from '../product/product';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер Product', () => {
        expect.assertions(1)
        const component = mount(
            <Provider store={store}>
                <Product/>
            </Provider>
        )
        expect(component).toMatchSnapshot()
    });
})