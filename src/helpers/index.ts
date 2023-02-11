import {useDrawerProgress} from '@react-navigation/drawer';
import {StyleProp} from 'react-native';
import Animated from 'react-native-reanimated';

export function DrawerProgress() {
  const progress: any = useDrawerProgress();

  const borderTopLeftRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-8deg'],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 70],
  });

  const translateY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const screenStyles: StyleProp<any> = {
    borderTopLeftRadius,
    transform: [{rotate}, {translateX}, {translateY}],
  };

  return screenStyles;
}

export default {};
