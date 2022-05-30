const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const cartReducer = (state= initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
                checkout: false,
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
            }
        case "INCREASE":
            return {
                ...state,
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
            }
        case "DECREASE":
            return {
                ...state,
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
            }
        case 'CHECKOUT': 
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
        case 'CLEAR': 
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }
        default:
            return state
    }
}

export default cartReducer;