import Movie from '../../../model/MoviesModel/Movie';
import IState from '../IState';

export default interface MovieDetailState extends IState {
  movie?: Movie;
}
