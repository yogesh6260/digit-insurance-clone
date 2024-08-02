import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// screens
import Splash from '../screens/Splash';
import OnBoarding from '../screens/OnBoarding';
import MobileLogin from '../screens/MobileLogin';
import EnterOTP from '../screens/EnterOTP';
import TabNavigator from './TabNavigator';
import Product from '../screens/Product';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="onboarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mobilelogin"
          component={MobileLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="enterotp"
          component={EnterOTP}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="tabMenu"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="product"
          component={Product}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
