//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {sections} from '../utils/constants';
import Section from '../components/widgets/sections';

// create a component
const Sections = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        renderItem={({item}) => <Section item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Sections;
