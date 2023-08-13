// قطار الذهاب
import React from 'react';

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardTrain} from '../components';

export const Screen1 = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
        <CardTrain />
        <CardTrain />
        <CardTrain />
        <CardTrain />
        <CardTrain />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  detailsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
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
