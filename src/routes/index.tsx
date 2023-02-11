import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

//screens
import Order from '../screens/Order';
import BottomNavigator from './BottomNavigator';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';

import {Drawer as CustomDrawer} from '../components';
import {colors} from '../theme';

import {RootStackParamList} from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            width: '50%',
            backgroundColor: colors.primary,
          },
          sceneContainerStyle: {
            backgroundColor: colors.primary,
          },
          headerShown: false,
        }}
        drawerContent={props => {
          return <CustomDrawer {...props} />;
        }}>
        <Drawer.Screen name="Start" component={BottomNavigator} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Favourite" component={Favourites} />
        <Drawer.Screen name="Order" component={Order} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
