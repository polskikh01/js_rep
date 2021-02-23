import React from 'react';
import {mount} from "enzyme";
import {describe, it, expect} from '@jest/globals'
import {Provider} from 'react-redux'

import {store} from '../../__data__/store'

import Main from '../main/main';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер Main', () => {
        expect.assertions(1)
        const component = mount(
            <Provider store={store}>
                <Main/>
            </Provider>
        )
        expect(component).toMatchSnapshot()
    });
})