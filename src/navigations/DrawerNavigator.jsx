import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/tabs/Home';
import React from 'react';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
