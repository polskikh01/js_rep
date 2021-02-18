import axios from 'axios';
import { getConfigValue } from '@ijl/cli';

import * as types from '../action-types';

const submitActionCreator = () => ({ type: types.TRANSPORT.REQUEST });
const successActionCreator = (items) => ({ type: types.TRANSPORT.SUCCESS, payload: items });
const errorActionCreator = (error) => ({ type: types.TRANSPORT.FAILURE, payload: error });

export const addProduct = product => async (dispatch) => {
    const baseApiUrl = getConfigValue('js_rep.api');

    dispatch(submitActionCreator());
    try {
        const response = await axios.post(`${baseApiUrl}/addProduct`, {product});
        console.log(response);
        dispatch(successActionCreator(response.data.items));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};

export const getProducts = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('js_rep.api');

    dispatch(submitActionCreator());
    try {
        const response = await axios.get(`${baseApiUrl}/getProducts`);
        dispatch(successActionCreator(response.data.items));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};