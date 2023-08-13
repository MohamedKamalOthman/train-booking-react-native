import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {Screen1} from '../screens';
const Tab = createMaterialTopTabNavigator();

const SettingsScreen = ({route}) => {
  return (
    <View>
      <Text>Second</Text>
    </View>
  );
};

const Screen3 = ({route}) => {
  return (
    <View>
      <Text>Third</Text>
    </View>
  );
};
const Screen4 = ({route}) => {
  return (
    <View>
      <Text>Fourth</Text>
    </View>
  );
};
const Screen5 = ({route}) => {
  return (
    <View>
      <Text>Fifth</Text>
    </View>
  );
};

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
        component={SettingsScreen}
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
