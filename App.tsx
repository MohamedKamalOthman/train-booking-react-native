/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {BottomBar, Breadcrumb} from './app/components';
import Tabs from './app/navigation/BreadCrumbTopBar';

function App(): JSX.Element {
  const [index, setIndex] = React.useState(1);
  const [nav, setNav] = React.useState(null);
  // hide when mounted and ready
  useLayoutEffect(() => {
    setTimeout(() => {
      console.log('hiding splash screen');
      SplashScreen.hide();
    }, 500);
  }, []);
  return (
    <NavigationContainer>
      <Breadcrumb index={index} nav={nav} />
      <Tabs setIndex={setIndex} index={index} setNav={setNav} />
      <BottomBar navigation={nav} next={index} />
    </NavigationContainer>
  );
}

export default App;
