import CommonService from './CommonService';
import { Movie } from '../model/MoviesModel/Movie';
import { movieListApi } from '../utils';

class MoviesService extends CommonService<Movie> {
  constructor() {
    super();
    this.rootURL = movieListApi;
  }
}

export const moviesService = new MoviesService();