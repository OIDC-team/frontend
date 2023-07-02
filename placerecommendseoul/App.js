import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
// import {Provider} from 'react-redux';
// import ReduxThunk from '';
// import Reducer from './src/_reducers';
// import promiseMiddleware from 'redux-promise';
// import {applyMiddleware, createStore} from 'redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';

import LoginPage from './src/components/views/LoginPage/LoginPage';
import UserPage from './src/components/views/UserPage/UserPage';
import LandingPage from './src/components/views/LandingPage/LandingPage';
import PlaceListPage from '././src/components/views/PlaceListPage/PlaceLIstPage';
import MyBoxPage from './src/components/views/MyBoxPage/MyBoxPage';

// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   ReduxThunk,
// )(createStore);
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    // <Provider store={createStoreWithMiddleware(Reducer)}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'User') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } else if (route.name === 'MyBox') {
              iconName = focused ? 'bookmark' : 'bookmark-o';
              return <IconF name={iconName} size={size} color={color} />;
            } else if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Explore"
          component={PlaceListPage}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="MyBox"
          component={MyBoxPage}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="User"
          component={UserStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
