
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';


const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  },
},
{
  headerMode: 'none',
}
);

export default createAppContainer(AppNavigator);