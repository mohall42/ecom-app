import { combineReducers } from 'redux';

const cart = () => {
    return [

    ]
}



/* const cartCount = (val = 0, action) => {
    if (action.type === 'CART_COUNT_CHANGE') {
        let value = action.payload;

        return value += val;

    }

    return val;
}; */

const cartUpdate = (cartItems = [], action) => {

    if (action.type === 'ADD_TO_CART') {
        return [...cartItems, action.payload]
    }

    return cartItems;

};

export default combineReducers({
    cartUpdate: cartUpdate,
    cart: cart

})