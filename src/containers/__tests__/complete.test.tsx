import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { Provider } from 'react-redux';
import mockAdapter from 'axios-mock-adapter';

import { commonAxios } from '../../utils/axios';
import product_mocks from '../../../stubs/api/mocks/complete/success.json';

import { store } from '../../__data__/store';

import Complete from '../complete/complete';

const multipleRequest = async (mock, responses) => {
    await act(async () => {
        await mock.onAny().reply((config) => {
            const [method, url, params, ...response] = responses.shift();
            if (config.url.includes(url)) {
                return response;
            }
        });
    });
};

describe('Тестирование всего приложения', () => {
    let mockAxios;
    beforeEach(() => {
        mockAxios = new mockAdapter(commonAxios);
    });
    it('Тестируем рендер Complete', async () => {
        expect.assertions(2);
        const component = mount(
            <Provider store={store}>
                <Complete />
            </Provider>
        );

        expect(component).toMatchSnapshot();

        const response = [
            [
                'GET',
                `/getComplete`,
                {},
                200,
                {
                    ...product_mocks,
                },
            ],
        ];

        await multipleRequest(mockAxios, response);
        component.update();

        expect(component).toMatchSnapshot();
    });
});
