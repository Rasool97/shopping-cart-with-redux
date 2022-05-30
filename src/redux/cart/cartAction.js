const addItem = (cartDetails) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            ...cartDetails
        }
    }  
}

const removeItem = (cartDetails) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            ...cartDetails
        }
    }
}

const increase = (cartDetails) => {
    return {
        type: 'INCREASE',
        payload: {
            ...cartDetails
        }
    }
}

const decrease = (cartDetails) => {
    return {
        type: 'DECREASE',
        payload: {
            ...cartDetails
        }
    }
}

const checkoutCart = () => {
    return {
        type: 'CHECKOUT'
    }
}

const clearCart = () => {
    return {
        type: 'CLEAR'
    }
}

export {
    addItem,
    removeItem,
    increase,
    decrease,
    checkoutCart,
    clearCart
}