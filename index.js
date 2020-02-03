/**
 * @format
 */
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducer/ReducerFactory';
import createSagaMiddleware from 'redux-saga';
import dataSaga from './src/redux/saga/SagaFactory';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  return store;
}

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);