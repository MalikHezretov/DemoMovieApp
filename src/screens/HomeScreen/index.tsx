import React, { Component } from 'react';
import { SafeAreaView,  } from 'react-native';
import {connect} from 'react-redux';
import AppAction from '../../redux/action/AppAction';
import AppState from '../../redux/state/AppState';
import {
  ContinaerStyle,
  ImageContainer,
  ContentStyle,
  TitleStyle,
  Footer,
  Cause,
  Price,
} from './styled';

interface AppProps {
  appData: AppState;
  getList: () => any;
}

class HomeScreen extends Component<AppProps> {
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
    const { movies } = this.props.appData;
    
    return (
      <SafeAreaView>
        <ContinaerStyle>
          <ImageContainer source={{ uri: movies.homepage }} />
          <ContentStyle>
            <TitleStyle>{movies.title}</TitleStyle>
            <Footer>
              {movies.adult && <Cause>REFUNDED</Cause>}
              <Price>{movies.popularity} S$</Price>
            </Footer>
          </ContentStyle>
        </ContinaerStyle>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);   