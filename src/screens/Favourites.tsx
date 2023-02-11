import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {DrawerProgress} from '../helpers';
import Animated from 'react-native-reanimated';
import {Header} from '../components';

const Favourites = ({navigation}: any) => {
  const screenStyles = DrawerProgress();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View
        style={[
          screenStyles,
          {flex: 1, overflow: 'hidden', backgroundColor: 'white'},
        ]}>
        <Header title="Favourites" navigation={navigation} />
        <View>
          <Text></Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Favourites;
