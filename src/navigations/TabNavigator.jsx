import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/tabs/Home';
import Space from '../screens/tabs/Space';
import Wellness from '../screens/tabs/Wellness';
import Policies from '../screens/tabs/Policies';
import Life from '../screens/tabs/Life';
import {Image, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#272829',
        tabBarInactiveTintColor: '#6D5D6E',
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require('../assets/home-fill.png')}
                style={styles.icon}
              />
            );
          },
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="space"
        component={Space}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Image
                source={require('../assets/profile-fill.png')}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require('../assets/profile.png')}
                style={styles.icon}
              />
            );
          },
          title: 'My Space',
        }}
      />
      <Tab.Screen
        name="wellness"
        component={Wellness}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.outerCircle}>
                <Image
                  source={require('../assets/wellness.png')}
                  style={styles.wellness}
                />
              </View>
            );
          },
          title: 'Wellness',
        }}
      />
      <Tab.Screen
        name="policies"
        component={Policies}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Image
                source={require('../assets/insurance-fill.png')}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require('../assets/insurance.png')}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="life"
        component={Life}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View>
                <Image
                  source={require('../assets/heart-fill.png')}
                  style={[styles.icon, {tintColor: '#FFB22C'}]}
                />
              </View>
            );
          },
          title: 'Life',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    tintColor: '#272829',
  },
  outerCircle: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDE4D',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    position: 'absolute',
    bottom: 10,
  },
  wellness: {
    width: 30,
    height: 30,
  },
});
export default TabNavigator;
