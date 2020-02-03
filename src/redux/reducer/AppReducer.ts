import AppState from '../state/AppState';
import { iDataState } from '../state/IState';
import IAction from '../action/IAction';
import AppAction from '../action/AppAction';
import  Movie  from '../../model/MoviesModel/Movies';
import UtilAction from '../action/UtilAction';

export default class AppReducer {
  private static readonly _initialState: AppState = {
    movies: [],
    state: iDataState.initial,
    errorMessage: '',
  };

  public static reducer(
    state: AppState = AppReducer._initialState,
    action: IAction<any, Movie>,
  ): AppState {
    switch (action.type) {
      case AppAction.GET_MOVIES:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };

      case AppAction.LOAD_MOVIES:
        return {
          ...state,
          movies: action.data !== null ? action.data! : [],
          state: iDataState.loaded,
          errorMessage: '',
        };

      case AppAction.SHOW_MOVIE_LIST:
        return {
          ...state,
          state: iDataState.loaded,
        };

      case AppAction.SHOW_MOVIE_DETAIL:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
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
