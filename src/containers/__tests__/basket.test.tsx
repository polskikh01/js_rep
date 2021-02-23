import React from 'react';
import {mount} from "enzyme";
import {describe, it, expect} from '@jest/globals'
import {Provider} from 'react-redux'

import {store} from '../../__data__/store'

import Step1 from '../basket/basket';
import Step2 from '../basket/basket';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер basketStep1', () => {
        expect.assertions(1)
        const component = mount(
            <Provider store={store}>
                <Step1/>
            </Provider>
        )
        expect(component).toMatchSnapshot()
    });
    it('Тестируем рендер basketStep2', () => {
        expect.assertions(1)
        const component = mount(
            <Provider store={store}>
                <Step2/>
            </Provider>
        )
        expect(component).toMatchSnapshot()
    });
})