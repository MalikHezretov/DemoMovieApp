import CommonService from './CommonService';
import { Detail } from '../model/DetailModel';
import { movieDetailApi } from '../utils'

class MovieDetailService extends CommonService<Detail> {
  constructor() {
    super();
    this.detailsURL = movieDetailApi;
  }
}

export const movieDetailService = new MovieDetailService();