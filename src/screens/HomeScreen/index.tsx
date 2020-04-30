import React, { useEffect } from 'react';
import {ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AppAction from '../../redux/action/AppAction';
import MovieCards from '../../components/MovieCards';
import {Title} from './styled';
import { SearchBar } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

const HomeScreen = ({navigation}: any) => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const movieData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppAction.getMovies('Star','movie'));
  }, []);

  // useEffect(() => {
  //   dispatch(AppAction.getMovies('Star','series'));
  // }, []);

  // useEffect(() => {
  //   dispatch(AppAction.getMovies('Star','episode'));
  // }, []);

  const showMovieList = () => {
    console.log('state', movieData.appData.movies);
        const { navigate } = navigation;
        if(movieData){
            const { Search } = movieData.appData.movies;
            return (
                <ScrollView>
                    <Title>Movies on Theatre</Title>
                    <MovieCards nav={navigate} movieList={Search} />
                    <Title>Coming Soon</Title>
                    <MovieCards nav={navigate} movieList={Search} />
                    <MovieCards nav={navigate}  movieList={Search} />
                </ScrollView>
            )
        }

        return <ActivityIndicator color='#fff' style={{alignSelf: 'center'}} size="large" />
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1d1e28'}}>
      <SearchBar placeholder='Type Here...' />
      {showMovieList()}
    </SafeAreaView>
  );
};

export default HomeScreen;
