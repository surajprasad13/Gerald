export type RootStackParamList = {
  Start: undefined;
  Cart: undefined;
  Favourite: undefined;
  Order: undefined;
};

export type BottomStackParamList = {
  HomeNavigator: undefined;
  Explore: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Member: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default {};
