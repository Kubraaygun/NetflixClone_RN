//import liraries
import {Smileys} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {getRandomColor} from '../../utils/function';
import {width} from '../../utils/constants';

// create a component
const WhatchListItem = ({item, index}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width / 2,
          height: 150,
          backgroundColor: getRandomColor(index),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Smileys size="70" color={ThemeColors.WHITE} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
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
