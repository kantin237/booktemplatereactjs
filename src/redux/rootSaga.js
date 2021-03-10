import { takeEvery, call, put, fork, takeLatest } from 'redux-saga/effects';
import {LOAD_BOOK} from './book/bookType'
import loadBook from './book/bookSaga'


function* rootSaga() {
    yield takeLatest(LOAD_BOOK, loadBook);
}


export default rootSaga;