//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

// create a component
const Sections = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        renderItem={({item}) => <Text>{item.name}</Text>}
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
