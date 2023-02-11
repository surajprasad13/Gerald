import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
