/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Breadcrumb} from './app/components';
function App(): JSX.Element {
  // hide when mounted and ready
  useLayoutEffect(() => {
    setTimeout(() => {
      console.log('hiding splash screen');
      SplashScreen.hide();
    }, 500);
  }, []);
  return <Breadcrumb index={1} />;
}

export default App;
