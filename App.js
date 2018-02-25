import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ViewScreen from './screens/ViewScreen';
import ReportScreen from './screens/ReportScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation/>
    )
  }
}

const AppNavigation = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ViewScreen: { screen: ViewScreen },
  ReportScreen: { screen: ReportScreen },
});
