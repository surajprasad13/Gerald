import React from 'react';
import {SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

// screens
import Settings from '../screens/settings/Settings';
import Explore from '../screens/Explore';
import {colors} from '../theme';
import HomeNavigator from './HomeNavigator';
import Animated from 'react-native-reanimated';
import {DrawerProgress} from '../helpers';

const Bottom = createBottomTabNavigator();

function BottomNavigator({}) {
  const screenStyles = DrawerProgress();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View style={[screenStyles, {flex: 1, overflow: 'hidden'}]}>
        <Bottom.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: colors.primary,
            },
            tabBarActiveTintColor: colors.white,
          }}>
          <Bottom.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{
              title: 'Home',
              tabBarIcon: ({size, color}) => (
                <Feather name="home" size={size} color={color} />
              ),
            }}
          />
          <Bottom.Screen
            name="Explore"
            component={Explore}
            options={{
              tabBarIcon: ({size, color}) => (
                <Feather name="search" size={size} color={color} />
              ),
            }}
          />
          <Bottom.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({size, color}) => (
                <Feather name="settings" size={size} color={color} />
              ),
            }}
          />
        </Bottom.Navigator>
      </Animated.View>
    </SafeAreaView>
  );
}

export default BottomNavigator;
