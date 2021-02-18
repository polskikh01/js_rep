import { combineReducers } from 'redux';

import productReducer, {ProductState} from './product'

export type AppStore = {
    product: ProductState;
};

export default combineReducers<AppStore>({
    product: productReducer
})