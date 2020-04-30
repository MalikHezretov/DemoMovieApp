import CommonModel from '../model/CommonModel';
export default interface iApiMethod<T extends CommonModel> {
  getAll(s: string, type: string): Promise<T[] | null>;
  getMovieDetail(id: string): Promise<T | null>;
}