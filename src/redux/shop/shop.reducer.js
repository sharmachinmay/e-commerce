import ShopActionsType from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsType.fetchCollectionsStart:
            return {
                ...state,
                isFetching: true
            };

        case ShopActionsType.fetchCollectionsSucess:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };

        case ShopActionsType.fetchCollectionsFailure:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
            
        default:
            return state;
    }
}

export default shopReducer;