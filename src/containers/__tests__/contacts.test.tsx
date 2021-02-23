import React from 'react';
import { mount } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import { Provider } from 'react-redux';

import { store } from '../../__data__/store';

import Contacts from '../contacts/contacts';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер Complete', () => {
        expect.assertions(1);
        const component = mount(
            <Provider store={store}>
                <Contacts />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
