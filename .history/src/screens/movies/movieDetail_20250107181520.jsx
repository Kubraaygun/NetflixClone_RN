//import liraries
import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {getMovieData} from '../../store/action/movieActions';

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
      <ScrollView></ScrollView>
    </View>
  );
};

//make this component available to the app
export default MovieDetail;
