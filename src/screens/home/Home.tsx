import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

//helpers
import {colors, fonts} from '../../theme';
import {Header} from '../../components';

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Start" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontFamily: fonts.bold}}>Home Screen</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Member')}
          style={{marginTop: 20}}
          contentStyle={{
            backgroundColor: colors.primary,
          }}>
          Memeber Screen {'  '} <Feather name="arrow-right" />
        </Button>
      </View>
    </View>
  );
};

export default Home;
