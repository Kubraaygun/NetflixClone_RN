import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
Provider;
import RootNavigation from './src/router/rootNavigation';
import {store} from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
