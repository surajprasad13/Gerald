import React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import Home from '../screens/home/Home';
import Member from '../screens/home/Member';

//types
import {HomeStackParamList} from './types';

const Stack = createStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <Animated.View style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Member" component={Member} />
      </Stack.Navigator>
    </Animated.View>
  );
}

export default HomeNavigator;
