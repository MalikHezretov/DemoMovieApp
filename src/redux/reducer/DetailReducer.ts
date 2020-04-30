import MovieDetailState from '../state/movie/MovieDetailState';
import { iDataState } from '../state/IState';
import IAction from '../action/IAction';
import DetailAction from '../action/DetailAction';
import  { Detail }  from '../../model/DetailModel';
import UtilAction from '../action/UtilAction';

export default class DetailReducer {
  private static readonly _initialState: MovieDetailState = {
    detail: undefined,
    state: iDataState.initial,
    errorMessage: '',
  };

  public static reducer(
    state: MovieDetailState = DetailReducer._initialState,
    action: IAction<any, Detail>,
  ): MovieDetailState {
    switch (action.type) {
      case DetailAction.GET_DETAIL:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };

      case DetailAction.LOAD_DETAIL:
        return {
          ...state,
          detail: action.data,
          state: iDataState.loaded,
          errorMessage: '',
        };

      case DetailAction.SHOW_DETAIL:
        return {
          ...state,
          state: iDataState.loaded,
        };

      case UtilAction.ERROR:
        return {
          ...state,
          state: iDataState.error,
          errorMessage: action.error,
        };
      default:
        return state;
    }
  }
}