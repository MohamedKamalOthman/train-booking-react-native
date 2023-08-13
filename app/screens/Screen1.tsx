// قطار الذهاب
import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

export const Screen1 = ({navigation}: any) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.cityText}>
            DMM{'\n'}
            <Text style={styles.cityText2}>الدمام</Text>
          </Text>
          <Image
            source={require('../assets/images/train.png')}
            style={styles.image}
          />
          <Text style={styles.cityText}>
            RYD{'\n'}
            <Text style={styles.cityText2}>الرياض الشرق</Text>
          </Text>
        </View>
        <View />
      </View>
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
