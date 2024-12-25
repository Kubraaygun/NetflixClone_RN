//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          source={require('../../assets/images/image1.png')}
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
        />

        <View
          style={{
            width: '100%',
            height: '15%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <Text
            style={{
              fontSize: 24,
              padding: 5,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Unlimited entertainment, one low price.
          </Text>
          <Text
            style={{
              fontSize: 24,
              padding: 5,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            All of Netflix, starting at just $149,
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}></View>
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
export default GetStarted;
