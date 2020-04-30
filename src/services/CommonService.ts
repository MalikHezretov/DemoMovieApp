import CommonModel from '../model/CommonModel';
import iApiMethod from './iApiMethod';

export default abstract class CommonService<T extends CommonModel>
  implements iApiMethod<T> {
  rootURL: string = '';
  detailsURL: string = '';

  async getAll(s:string, type:string): Promise<T[]> {
    try {
      const response = await fetch(`${this.rootURL}s=${s}&${type}`);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async getMovieDetail(id: string): Promise<T | null> {
    try {
      const response = await fetch(this.detailsURL + id, {
      });
      if (!response.ok) {
        throw new Error('Cannot fetch data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}