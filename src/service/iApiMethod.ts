import CommonModel from '../model/CommonModel';
export default interface iApiMethod<T extends CommonModel> {
  getAll(): Promise<T[]>;
}