import { combineReducers } from 'redux';

import productReducer, {ProductState} from './product'
import basketReducer, {BasketState} from './basket'

export type AppStore = {
    product: ProductState;
    basket: BasketState
};

export default combineReducers<AppStore>({
    product: productReducer,
    basket: basketReducer
})