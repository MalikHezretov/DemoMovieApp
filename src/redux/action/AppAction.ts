import IAction from './IAction';

export default class AppAction {
  public static readonly GET_MOVIES: string =
    'AppAction.GET_MOVIES';
  public static readonly LOAD_MOVIES: string =
    'AppAction.LOAD_MOVIES';
  public static readonly SHOW_MOVIE_LIST: string =
    'AppAction.SHOW_MOVIE_LIST';
  public static readonly SHOW_MOVIE_DETAIL: string =
    'AppAction.SHOW_MOVIE_DETAIL';

  public static getMovies = (s:string, type: string): IAction<String, void> => {
    return {
      payload: s && type,
      type: AppAction.GET_MOVIES,
    };
  };
}