export const initialState = {
    basket: [{
        id: "234234",
        title: "OnePlus 8 Pro (5G) Dual-SIM IN2023 256GB/12GB RAM Factory Unlocked Android Smartphone (Ultramarine Blue)- International Version",
        price: 1164.52,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/41qdBz5o-5L._AC_SY200_.jpg"
    },
    {
        id: "234234",
        title: "OnePlus 8 Pro (5G) Dual-SIM IN2023 256GB/12GB RAM Factory Unlocked Android Smartphone (Ultramarine Blue)- International Version",
        price: 1164.52,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/41qdBz5o-5L._AC_SY200_.jpg"
    }],
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
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

            return { ...state }
        default:
            return state;
    }
}

export default reducer;