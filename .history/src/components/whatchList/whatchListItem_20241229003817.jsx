//import liraries
import {Smileys} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const WhatchListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Smileys size="32" color="FF8A65" />
      </View>
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
});

//make this component available to the app
export default WhatchListItem;
