// قطار الذهاب
import React from 'react';

import {StyleSheet, View} from 'react-native';

export const Screen4 = ({navigation}: any) => {
  return (
    <>
      <View style={styles.container} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  cityText2: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  image: {
    width: 200,
    resizeMode: 'contain',
  },
});
