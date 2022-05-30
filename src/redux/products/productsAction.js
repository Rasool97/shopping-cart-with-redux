import { getProducts } from "../../services/api"

const fetchProductsRequest = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST'
    }
}

const fetchProductsSuccess = products => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    }
}

const fetchProductsFailure = error => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    }
}

const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const products = await getProducts();
            dispatch(fetchProductsSuccess(products));
        } catch(error) {
            dispatch(fetchProductsFailure(error.message));
        }
    }
}

export {
    fetchProducts,
}