import axios from 'axios';
import { getConfigValue } from '@ijl/cli';

import * as types from '../action-types';

const submitActionCreator = () => ({ type: types.PRODUCT.REQUEST });
const successActionCreator = (items) => ({ type: types.PRODUCT.SUCCESS, payload: items });
const errorActionCreator = (error) => ({ type: types.PRODUCT.FAILURE, payload: error });

export const getProducts = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('js_rep.api');

    dispatch(submitActionCreator());
    try {
        const response = await axios.get(`${baseApiUrl}/getProducts`);
        dispatch(successActionCreator(response.data.products));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};