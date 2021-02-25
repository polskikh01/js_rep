import { getConfigValue } from '@ijl/cli';
import { commonAxios } from '../../utils/axios';

import * as types from '../action-types';

const submitActionCreator = () => ({ type: types.COMPLETE.REQUEST });
const successActionCreator = (items) => ({ type: types.COMPLETE.SUCCESS, payload: items });
const errorActionCreator = (error) => ({ type: types.COMPLETE.FAILURE, payload: error });

export const getComplete = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('js_rep.api');

    dispatch(submitActionCreator());
    try {
        const response = await commonAxios.get(`${baseApiUrl}/getComplete`);
        dispatch(successActionCreator(response.data.completes));
    } catch (error) {
        dispatch(errorActionCreator('Неизвестная ошибка'));
    }
};
