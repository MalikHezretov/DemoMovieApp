import AppAction from '../action/AppAction';
import {takeEvery} from 'redux-saga/effects';
import getList from './GetMoviesSaga';

function* dataSaga() {
  yield takeEvery(AppAction.GET_MOVIES, getList);
}

export default dataSaga;
