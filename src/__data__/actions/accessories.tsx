import axios from 'axios';
import { getConfigValue } from '@ijl/cli';

import * as types from '../action-types';

const submitActionCreator = () => ({ type: types.ACCESSORIES.REQUEST });
const successActionCreator = (items) => ({ type: types.ACCESSORIES.SUCCESS, payload: items });
const errorActionCreator = (error) => ({ type: types.ACCESSORIES.FAILURE, payload: error });

export const getAccessories = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('js_rep.api');

    dispatch(submitActionCreator());
    try {
        const response = await axios.get(`${baseApiUrl}/getAccessories`);
        dispatch(successActionCreator(response.data.accessories));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};