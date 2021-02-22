import * as types from '../../action-types';

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
        case types.PRODUCT.REQUEST:
            return handleSubmit(state, action);
        case types.PRODUCT.SUCCESS:
            return handleSuccess(state, action);
        case types.PRODUCT.FAILURE:
            return handleFailure(state, action);
        default:
            return state;
    }
}
