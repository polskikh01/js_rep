import axios from 'axios';
import { getConfigValue } from '@ijl/cli';

const baseApiUrl = getConfigValue('js_rep');
export const commonAxios = axios.create({
    baseURL: baseApiUrl,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});
