import * as types from '../../../action-types';
import { addItem } from './utils.js';

export type ProductState = {
    productItems: [],
    loading: boolean
};

const initialState: ProductState = {
    productItems: [],
    loading: false
};

const handleSubmit = (state, action) => ({ ...state, loading: true });
const handleSuccess = (state, action) => ({
    ...state,
    loading: false,
    productItems: action.payload
});
const handleFailure = (state, action) => ({ ...state, loading: false });

export default function (state = initialState, action) {
    switch (action.type) {
        case types.TRANSPORT.REQUEST:
            return handleSubmit(state, action);
        case types.TRANSPORT.SUCCESS:
            return handleSuccess(state, action);
        case types.TRANSPORT.FAILURE:
            return handleFailure(state, action);
        default:
            return state;
    }
}
