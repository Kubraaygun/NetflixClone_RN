//import liraries
import {Home2, SearchNormal, VideoPlay} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../../utils/routes';

// create a component
const TabBarIcon = ({route, color, size}) => {
  switch (route.name) {
    case HOME:
      return <Home2 color={color} size={size} />;
    case NEWHOT:
      return <VideoPlay color={color} size={size} />;
    case SEARCH:
      return <SearchNormal color={color} size={size} />;
    case DOWNLOADS:
      return <Home2 color={color} size={size} />;
    default:
      <Home />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TabBarIcon;
