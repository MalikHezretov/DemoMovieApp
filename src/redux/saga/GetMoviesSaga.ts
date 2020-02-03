import {put} from 'redux-saga/effects';
import {moviesService} from '../../service/MoviesService';
import AppAction from '../action/AppAction';
import UtilAction from '../action/UtilAction';
import IAction from '../action/IAction';

function* getList(action: IAction<string, any>) {
  try {
    const data = yield moviesService.getAll();
    yield put({type: AppAction.LOAD_MOVIES, data: data});
  } catch (e) {
    yield put({type: UtilAction.ERROR, error: 'Cannot load movies'});
  }
}

export default getList;
