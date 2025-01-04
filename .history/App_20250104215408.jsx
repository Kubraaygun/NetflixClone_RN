import * as React from 'react';
import RootNavigation from './src/router/rootNavigation';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
