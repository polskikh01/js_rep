import * as types from '../../action-types';

export type BasketState = {
    basket: [];
    loading: boolean;
};

const initialState: BasketState = {
    basket: [],
    loading: false,
};

const handleSubmit = (state, action) => ({ ...state, loading: true });
const handleSuccess = (state, action) => ({
    ...state,
    loading: false,
    basket: action.payload,
});
const handleFailure = (state, action) => ({ ...state, loading: false });

export default function (state = initialState, action) {
    switch (action.type) {
        case types.BASKET.REQUEST:
            return handleSubmit(state, action);
        case types.BASKET.SUCCESS:
            return handleSuccess(state, action);
        case types.BASKET.FAILURE:
            return handleFailure(state, action);
        default:
            return state;
    }
}
