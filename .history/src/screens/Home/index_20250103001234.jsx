//import liraries
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {TOP_RATED_MOVIE_URL} from '../../service/url';
import {getRequest} from '../../service/verbs';

// create a component
const Home = () => {
  useEffect(() => {
    getRequest(TOP_RATED_MOVIE_URL).then(data => console.log(data));
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

//make this component available to the app
export default Home;
