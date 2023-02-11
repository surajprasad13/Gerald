import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

type HeaderType = {
  title: string;
  navigation: any;
};

const Header = ({title, navigation}: HeaderType) => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        margin: 10,
        marginLeft: 20,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={30} color="#D9D9D9" />
      </TouchableOpacity>
      <Text
        style={{
          textTransform: 'uppercase',
          marginLeft: 20,
          color: 'grey',
          fontSize: 25,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
