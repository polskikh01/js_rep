import React from 'react';
import { mount } from "enzyme";
import { describe, it, expect } from '@jest/globals'

import App from '../app';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер App', () => {
        expect.assertions(1)
        const component = mount(<App/>)

        expect(component).toMatchSnapshot()
    });
})