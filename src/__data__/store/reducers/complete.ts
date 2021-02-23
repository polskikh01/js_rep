import * as types from '../../action-types';

export type CompleteState = {
    productItems: [],
    loading: boolean
};

const initialState: CompleteState = {
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
        case types.COMPLETE.REQUEST:
            return handleSubmit(state, action);
        case types.COMPLETE.SUCCESS:
            return handleSuccess(state, action);
        case types.COMPLETE.FAILURE:
            return handleFailure(state, action);
        default:
            return state;
    }
}
