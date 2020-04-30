import React from 'react';
import HomeScreen from '../';
import { render, waitForElement } from 'react-native-testing-library';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from '../../../redux/reducer/ReducerFactory';
import MovieCards from '../../../components/MovieCards';
import { MovieList } from '../../../model/MoviesModel/Movie';
import AppAction from '../../../redux/action/AppAction';
import { MockList } from '../mockData';
// import SplashScreen from 'react-native-splash-screen';

function renderWithRedux(ui: any, { initialState, store = createStore(rootReducer, initialState) }: any = {}) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    };
  }

  

describe("Home screen", () => {
    beforeEach(() => { 
        // SplashScreen.hide()
        // console.warn('api', AppAction.getMovies())
        
    });
    let navigation = jest.isMockFunction(null);
    let movieList: MovieList;

    it('render home screen', () => {
        let  wrapper = renderWithRedux(<HomeScreen navigation={navigation} />);
    
        expect(wrapper).toMatchSnapshot();
      });


    it('render home screen title', () => {
        const { queryByText } = renderWithRedux(<HomeScreen navigation={navigation} />);
    
        expect(queryByText('Movies on Theatre')).not.toBeNull();
        expect(queryByText('Coming Soon')).not.toBeNull();
      });

      it('render movies list', () => {
        const cardWrapper = renderWithRedux(<MovieCards nav={navigation} movieList={movieList} />);

        expect(cardWrapper).toMatchSnapshot();
    
      });

      it('render movie cards with props', async () => {
        const { queryByText, debug } = renderWithRedux(<MovieCards nav={navigation} movieList={movieList} />);

        expect(queryByText('Movies on Theatre')).toBeNull();
    
      });
});