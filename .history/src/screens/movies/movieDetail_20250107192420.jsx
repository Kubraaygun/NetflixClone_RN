//import liraries
import React, {useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {getMovieData} from '../../store/action/movieActions';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeColors} from '../../theme/themeColors';
import {height, width} from '../../utils/constants';
import {IMAGE_BASE_URL} from '../../service/url';

// create a component
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const {pendingDetailData, movieDetailData} = useSelector(
    state => state.movies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovieData({
        movieId: movieId,
      }),
    );
  }, []);
  return (
    <View style={defaultScreenStyle.detailScreen}>
      {pendingDetailData ? (
        <View style={styles.container}>
          <ActivityIndicator color={ThemeColors.GRAY} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            source={{uri: IMAGE_BASE_URL + movieDetailData?.backdrop_path}}
            style={{
              width: width,
              height: height * 0.6,

              resizeMode: 'cover',
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movieDetailData.original_title}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColors.WHITE,
  },
  infoContainer: {
    padding: 10,
  },
});
//make this component available to the app
export default MovieDetail;
