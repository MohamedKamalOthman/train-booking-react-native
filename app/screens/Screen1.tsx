/* eslint-disable react-native/no-inline-styles */
// قطار الذهاب
import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const CardTrain = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: 'white',
        elevation: 10,
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '80%',
      }}>
      <View>
        <Text />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            backgroundColor: '#e7f3f7',
            borderBottomLeftRadius: 10,
            borderTopColor: '#00798c',
            borderTopWidth: 1,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#00798c',
              fontSize: 12,
              padding: 10,
              fontWeight: 'bold',
              textAlignVertical: 'center',
            }}>
            اعمال
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            backgroundColor: '#00798c',
            borderBottomRightRadius: 10,
            borderColor: '#00798c',
            borderLeftWidth: 1,
            borderTopWidth: 1,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#e7f3f7',
              fontSize: 12,
              padding: 10,
              fontWeight: 'bold',
              textAlignVertical: 'center',
            }}>
            اقتصادي
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const Screen1 = () => {
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
        <CardTrain />
      </View>
    </>
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
