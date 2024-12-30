//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, Text, FlatList} from 'react-native';

import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WhatchListItem from '../../components/whatchList/whatchListItem';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const WatchList = () => {
  const {whatchList} = useSelector(state => state.watchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              color: ThemeColors.WHITE,
              fontSize: 30,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Who's Watching?
          </Text>
        }
        numColumns={2}
        data={whatchList}
        renderItem={({item, index}) => (
          <WhatchListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

//make this component available to the app
export default WatchList;
