import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {colors, fonts} from '../../theme';

import Feather from 'react-native-vector-icons/Feather';

const Member = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25, fontFamily: fonts.bold}}>Member Screen</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={{marginTop: 30}}
        contentStyle={{backgroundColor: colors.primary}}>
        <Feather name="arrow-left" /> {'   '} Home Screen
      </Button>
    </View>
  );
};

export default Member;
