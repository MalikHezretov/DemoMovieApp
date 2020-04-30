import IAction from './IAction';

export default class DetailAction {
  public static readonly GET_DETAIL: string =
    'DetailAction.GET_DETAIL';
  public static readonly LOAD_DETAIL: string =
    'DetailAction.LOAD_DETAIL';
  public static readonly SHOW_DETAIL: string =
    'DetailAction.SHOW_DETAIL';

  public static getMovieDetail = (id: string): IAction<String, void> => {
    return {
      payload: id,
      type: DetailAction.GET_DETAIL,
    };
  };
}