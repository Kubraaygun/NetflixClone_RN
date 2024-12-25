import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
RootNavigation;
import {Provider} from 'react-redux';
import {store} from './src/store';
import RootNavigation from './src/router/rootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
