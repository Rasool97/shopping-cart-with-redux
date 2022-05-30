import {combineReducers} from 'redux';
import cartReducer from './cart/cartReducer';
import productsReducer from './products/productsReducer';
import productReducer from './product/productReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    product: productReducer
})

export default rootReducer;
