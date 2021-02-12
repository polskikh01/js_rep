import React from 'react';
import ReactDom from 'react-dom';
import i18next from 'i18next';
import { i18nextReactInitConfig } from '@ijl/cli';

import App from './app';

i18next.t = i18next.t.bind(i18next);

const i18NextPromise = i18nextReactInitConfig(i18next);

export default () => <App />;

export const mount = async (Сomponent) => {
    await Promise.all([i18NextPromise]);
    ReactDom.render(<Сomponent/>, document.getElementById('app'));
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};
