import * as types from '../../action-types';

export type AccessoriesState = {
    productItems: [];
    loading: boolean;
};

const initialState: AccessoriesState = {
    productItems: [],
    loading: false,
};

const handleSubmit = (state, action) => ({ ...state, loading: true });
const handleSuccess = (state, action) => ({
    ...state,
    loading: false,
    productItems: action.payload,
});
const handleFailure = (state, action) => ({ ...state, loading: false });

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ACCESSORIES.REQUEST:
            return handleSubmit(state, action);
        case types.ACCESSORIES.SUCCESS:
            return handleSuccess(state, action);
        case types.ACCESSORIES.FAILURE:
            return handleFailure(state, action);
        default:
            return state;
    }
}
