import IAction from '../action/IAction';
import { movieDetailService } from '../../services/MovieDetail.Service';
import UtilAction from '../action/UtilAction';
import { put } from 'redux-saga/effects';
import DetailAction from '../action/DetailAction';

function* getItemDetails(action: IAction<string, any>) {
  try {
    const data = yield movieDetailService.getMovieDetail(action.payload!);
    yield put({type: DetailAction.LOAD_DETAIL, data: data});
  } catch (e) {
    yield put({type: UtilAction.ERROR, error: 'Cannot process data'});
  }
}

export default getItemDetails;