import Movie from '../../../model/MoviesModel/Movies';
import IState from '../IState';

export default interface MovieDetailState extends IState {
  movie?: Movie;
}
