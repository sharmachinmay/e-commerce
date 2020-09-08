import CartActionTypes from './cart.types';
import addItemToCart, { removeItemFromCart } from './cart.utils';

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.toggleCartHidden:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        case CartActionTypes.addItems:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.clearItemFromCart:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.removeItem:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };    
        default:
            return state; 
    }
}

export default cartReducer;