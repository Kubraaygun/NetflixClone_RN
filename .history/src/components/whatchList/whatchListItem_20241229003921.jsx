//import liraries
import {Smileys} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const WhatchListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 100, height: 100}}>
        <Smileys size="32" color="#FF8A65" />
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
    backgroundColor: '#2c3e50',
    margin: 10,
  },
  title: {
    color: ThemeColors.WHITE,
  },
});

//make this component available to the app
export default WhatchListItem;
