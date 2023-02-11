import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Divider} from 'react-native-paper';
import Animated from 'react-native-reanimated';

// helpers
import {colors, fonts} from '../theme';

const data = [
  {
    title: 'Start',
    route: 'Start',
  },
  {
    title: 'Your Cart',
    route: 'Cart',
  },
  {
    title: 'Favourites',
    route: 'Favourite',
  },
  {
    title: 'Your Orders',
    route: 'Order',
  },
];

const CustomDrawer = (props: any) => {
  const {state, navigation} = props;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{padding: 15}}>
        <Animated.View style={{flex: 1, transform: [{translateX: 0}]}}>
          <View>
            <Text style={styles.title}>Beka</Text>
          </View>

          <View style={{marginTop: 50}}>
            {data.map(({title, route}, index) => {
              const active = index === state.index;

              return (
                <View key={index} style={{marginTop: 10}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(route)}
                    style={{
                      backgroundColor: active
                        ? 'rgba(255, 69, 0,0.1)'
                        : 'transparent',
                      borderRadius: 15,
                    }}>
                    <Text
                      style={{
                        color: active ? '#f06f5c' : 'white',
                        fontFamily: fonts.medium,
                        fontSize: 18,
                        margin: 15,
                      }}>
                      {title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <Divider style={{marginTop: 50}} />

          <View style={{marginTop: 50}}>
            <Text
              style={{
                color: colors.white,
                fontFamily: fonts.medium,
                fontSize: 20,
                margin: 15,
              }}>
              Sign Out
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 32,
  },
});

export default CustomDrawer;
