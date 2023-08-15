import {Alert, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

export async function openLink(
  link: string,
  headers?: any,
  verbose: boolean = false,
) {
  async function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  try {
    const url = link;
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#b5d7de',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#00798c',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: headers,
      });
      await sleep(800);
      if (verbose) {
        Alert.alert(JSON.stringify(result));
      }
    } else {
      Linking.openURL(url);
    }
  } catch (error: any) {
    if (verbose) {
      Alert.alert(error.message);
    }
  }
}
