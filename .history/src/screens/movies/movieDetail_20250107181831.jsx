//import liraries
import React, {useEffect} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {getMovieData} from '../../store/action/movieActions';
import {useDispatch} from 'react-redux';

// create a component
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovieData({
        movideId: movieId,
      }),
    );
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <ActivityIndicator />
    </View>
  );
};

//make this component available to the app
export default MovieDetail;
