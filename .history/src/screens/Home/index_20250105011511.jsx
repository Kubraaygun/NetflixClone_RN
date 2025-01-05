//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/action/movieActions';

// create a component
const Home = () => {
  const {topRatedMovies} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);
  console.log(topRatedMovies);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => (
          <Text style={{color: 'red'}}>{item.backdrop_path}</Text>
        )}
      />
    </View>
  );
};

//make this component available to the app
export default Home;
