export const initialState = {
    basket: [],
    user: null,
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.basket];
            const index = state.basket.findIndex((cartItem) => cartItem.id === action.id)
            if (index >= 0) {
                // go to the item in array and splice(AKA remove) it from array. 1 -->meaning, remove 1 item ONLY
                newCart.splice(index, 1);
            } else {
                console.warn(`Cannot remove product id: ${action.id} since it does not exist in Cart`);
            }

            return { ...state, basket: newCart }
        default:
            return state;
    }
}

export default reducer;