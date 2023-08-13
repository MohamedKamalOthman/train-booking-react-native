/* eslint-disable react-native/no-inline-styles */
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: 'white',
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '90%',
    marginBottom: 20,
  },
  textStyle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    marginHorizontal: 10,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  stopText: {
    backgroundColor: '#e7f3f7',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  section: {
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '50%',
    padding: 10,
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  blueButton: {
    backgroundColor: '#e7f3f7',
    borderBottomLeftRadius: 10,
    borderTopColor: '#00798c',
    borderTopWidth: 1,
  },
  greenButton: {
    backgroundColor: '#00798c',
    borderBottomRightRadius: 10,
    borderColor: '#00798c',
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
});

export const CardTrain = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.textStyle}>
            210.00{'\n'}
            <Text>ر.س</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textStyle}>
            10:54{'\n'}
            <Text>DMM</Text>
          </Text>
        </View>
        <View style={[styles.section, {margin: 5}]}>
          <Text style={[styles.textStyle, styles.stopText]}>2 توقف</Text>
          <Text
            style={[
              styles.textStyle,
              {paddingTop: 5, borderTopWidth: 1, borderColor: 'grey'},
            ]}>
            <FontAwesomeIcon icon={faClock} size={12} /> 3 س 52 د
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textStyle}>
            07:42{'\n'}
            <Text>RYD</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textStyle}>6</Text>
          <Text style={styles.textStyle}>رقم القطار</Text>
          <Text style={[styles.textStyle, styles.stopText]}>حديث</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={[{color: '#00798c'}, styles.btnText]}>اعمال</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.greenButton]}>
          <Text style={[{color: '#e7f3f7'}, styles.btnText]}>اقتصادي</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
