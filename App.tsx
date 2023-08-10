/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  console.log('showing splash screen');
  SplashScreen.show();

  // hide when mounted and ready
  useLayoutEffect(() => {
    setTimeout(() => {
      console.log('hiding splash screen');
      SplashScreen.hide();
    }, 500);
  }, []);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Welcome to React Native!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
