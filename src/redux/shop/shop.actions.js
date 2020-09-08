import ShopActionsTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type: ShopActionsTypes.fetchCollectionsStart
});

export const fetchCollectionSucess = collectionMap => ({
    type: ShopActionsTypes.fetchCollectionsSucess,
    payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionsTypes.fetchCollectionsFailure,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        
        collectionRef.get().then(snapshot => {
           const collectionMap = convertCollectionsSnapshotToMap(snapshot);
           dispatch(fetchCollectionSucess(collectionMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
};