//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import Button from '../../components/ui/button';

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
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Unlimited entertainment, one low price.
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            All of Netflix, starting at just $149.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: ThemeColors.BLACK,
          justifyContent: 'center',
        }}>
        <Button title="GET STARTED" />
      </View>
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
