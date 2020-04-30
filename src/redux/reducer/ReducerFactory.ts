import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import DetailReducer from './DetailReducer';

const ReducerFactory = combineReducers({
  appData: AppReducer.reducer,
  detailData: DetailReducer.reducer,
});

export default ReducerFactory;