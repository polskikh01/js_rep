import { combineReducers } from 'redux';

import productReducer, { ProductState } from './product';
import basketReducer, { BasketState } from './basket';
import accessoriesReducer, { AccessoriesState } from './accessories';
import completeReducer, { CompleteState } from './complete';

export type AppStore = {
    product: ProductState;
    basket: BasketState;
    accessories: AccessoriesState;
    complete: CompleteState;
};

export default combineReducers<AppStore>({
    product: productReducer,
    basket: basketReducer,
    accessories: accessoriesReducer,
    complete: completeReducer,
});
