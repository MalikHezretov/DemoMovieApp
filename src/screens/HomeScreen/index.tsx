import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import {connect} from 'react-redux';
import AppAction from '../../redux/action/AppAction';
import AppState from '../../redux/state/AppState';
import { FlatList } from 'react-native-gesture-handler';
import MovieItem from '../../components/MovieItem';

interface AppProps {
  appData: AppState;
  getList: () => any;
}

class App extends Component<AppProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      refunded: false,
    };
  }

  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { appData } = this.props;
    return (
      <SafeAreaView>
      <FlatList
        keyExtractor={(item: any) => item.id.toString()}
        data={appData.movies}
        renderItem={({item}) => (
          <MovieItem movie={item} onPress={() => {}} />
        )}
      />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getList: () => dispatch(AppAction.getMovies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);   