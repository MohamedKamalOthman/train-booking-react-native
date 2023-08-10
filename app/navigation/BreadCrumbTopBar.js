import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, View} from 'react-native';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({route}) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

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

function Tabs({setIndex, index}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 0, // Remove Tab Bar
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Screen5"
        component={Screen5}
        listeners={({navigation, route}) => {
          setIndex(5);
          return;
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        listeners={({navigation, route}) => {
          setIndex(4);
          return;
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        listeners={({navigation, route}) => {
          setIndex(3);
          return;
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        listeners={({navigation, route}) => {
          setIndex(2);
          return;
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        listeners={({navigation, route}) => {
          setIndex(1);
          return;
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
