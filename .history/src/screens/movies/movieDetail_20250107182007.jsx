//import liraries
import React, {useEffect} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {getMovieData} from '../../store/action/movieActions';
import {useDispatch} from 'react-redux';
import {ThemeColors} from '../../theme/themeColors';

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
      <View style={styles.container}>
        <ActivityIndicator color={ThemeColors.GRAY} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
//make this component available to the app
export default MovieDetail;
