import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Screen1, Screen2, Screen3, Screen4, Screen5} from '../screens';

const Tab = createMaterialTopTabNavigator();

function Tabs({setIndex, index, setNav}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 0, // Remove Tab Bar
        },
      }}
      initialRouteName="Screen1">
      <Tab.Screen
        name="Screen5"
        component={Screen5}
        listeners={({navigation, route}) => {
          setNav(navigation);
          setIndex(5);
          return;
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        listeners={({navigation, route}) => {
          setNav(navigation);
          setIndex(4);
          return;
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        listeners={({navigation, route}) => {
          setNav(navigation);
          setIndex(3);
          return;
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        listeners={({navigation, route}) => {
          setNav(navigation);
          setIndex(2);
          return;
        }}
      />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        listeners={({navigation, route}) => {
          setNav(navigation);
          setIndex(1);
          return;
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
