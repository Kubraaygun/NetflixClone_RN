//import liraries
import {
  ArrowCircleDown2,
  Home2,
  MessageQuestion,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-native';
import React from 'react';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../../utils/routes';

// create a component
const TabBarIcon = ({route, color, size, focused}) => {
  switch (route.name) {
    case HOME:
      return (
        <Home2
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case NEWHOT:
      return <VideoPlay color={color} size={size} />;
    case SEARCH:
      return <SearchNormal1 color={color} size={size} />;
    case DOWNLOADS:
      return <ArrowCircleDown2 color={color} size={size} />;
    default:
      <MessageQuestion />;
  }
};

//make this component available to the app
export default TabBarIcon;
