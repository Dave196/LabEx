import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Two from './components/Two';
import Three from './components/Three';

const Stack = createStackNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Naviagtor>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Two" component={Two} />
          <Stack.Screen name="Three" component={Three} />
        </Stack.Naviagtor>
      </NavigationContainer>

    );
  }
}

export default App;
