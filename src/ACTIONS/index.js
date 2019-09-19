


const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item

    }
}

const chageCartCount = (count) => {
    return {
        type: 'CART_COUNT_CHANGE',
        payload: count
    }
}