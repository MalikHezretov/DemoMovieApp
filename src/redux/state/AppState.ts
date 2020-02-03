import  Movie from '../../model/MoviesModel/Movies';
import IState from './IState';

export default interface AppState extends IState {
  transactions: Movie;
}
