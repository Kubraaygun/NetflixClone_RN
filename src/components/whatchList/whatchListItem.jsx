//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {getRandomColor} from '../../utils/function';
import {width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST, TAB} from '../../utils/routes';

// create a component
const WhatchListItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.replace(TAB)} style={styles.container}>
      <View
        style={{
          width: width * 0.35,
          height: width * 0.35,
          backgroundColor: getRandomColor(index),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/smiley.png')}
          style={{
            width: width * 0.3,
            height: width * 0.3,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

//make this component available to the app
export default WhatchListItem;
