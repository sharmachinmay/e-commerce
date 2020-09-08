import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fetchCollectionSucess,
    fetchCollectionFailure
} from './shop.actions';
import ShopActionsType from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSucess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }    
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionsType.fetchCollectionsStart, fetchCollectionsAsync);
}