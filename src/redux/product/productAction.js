import { getProductDetail } from "../../services/api"

const fetchProductRequest = () => {
    return {
        type: 'FETCH_PRODUCT_REQUEST',
    }
}

const fetchProductSuccess = product => {
    return {
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: product,
    }
}

const fetchProductFailure = error => {
    return {
        type: 'FETCH_PRODUCT_FAILURE',
        payload: error,
    }
}

const fetchProduct = productId => {
    return async (dispatch) => {
        dispatch(fetchProductRequest());
        try {
            const product = await getProductDetail(productId);
            if(product === null) {
                throw new Error('There is not this page.')
            }
            dispatch(fetchProductSuccess(product));
        } catch (error) {
            dispatch(fetchProductFailure(error.message));
        }
    }
}

export {
    fetchProduct,
}