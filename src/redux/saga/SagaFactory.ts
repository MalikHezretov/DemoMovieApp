import AppAction from '../action/AppAction';
import DetailAction from '../action/DetailAction';
import {takeEvery} from 'redux-saga/effects';
import getList from './GetMoviesSaga';
import getItemDetails from './GetMovieDetailsSaga';

function* dataSaga() {
  yield takeEvery(AppAction.GET_MOVIES, getList);
  yield takeEvery(DetailAction.GET_DETAIL, getItemDetails);
}

export default dataSaga;