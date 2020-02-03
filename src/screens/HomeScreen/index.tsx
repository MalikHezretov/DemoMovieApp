import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import AppAction from '../../redux/action/AppAction';
import AppState from '../../redux/state/AppState';

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
    console.log('appData', this.props.appData);
    return (
      <SafeAreaView>
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
    getList: () => dispatch(AppAction.getTransactions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);   