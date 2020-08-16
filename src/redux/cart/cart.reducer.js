import CardActionTypes from './cart.actions';
import CartActionTypes from './cart.types';
import addItemToCart from './cart.utils';

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
        default:
            return state; 
    }
}

export default cartReducer;