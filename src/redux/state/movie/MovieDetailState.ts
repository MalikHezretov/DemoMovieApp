import { Detail } from '../../../model/DetailModel';
import IState from '../IState';

export default interface MovieDetailState extends IState {
  detail?: Detail;
}