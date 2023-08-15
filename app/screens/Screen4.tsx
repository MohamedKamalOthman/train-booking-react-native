// قطار الذهاب
import {
  faArrowRightArrowLeft,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const Screen4 = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Text style={styles.text}>Passenger Name: {'محمد كمال'}</Text>
            <FontAwesomeIcon icon={faCheckCircle} size={20} color={'#00798c'} />
          </View>
          <Text style={styles.subText}>الهوية الوطنية - 12345678</Text>
          <Text style={styles.subText}>Saudi Arabia</Text>
          <Text style={styles.subText}>بالغ 2001/5/20</Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Text style={styles.text}>ادخل معلومات المسافر - شباب</Text>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              size={20}
              color={'#00798c'}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Text style={styles.text}>ادخل معلومات المسافر - طفل</Text>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              size={20}
              color={'#00798c'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#00798c',
  },
  subText: {
    fontSize: 16,
    marginRight: 20,
    color: 'grey',
    marginVertical: 5,
  },
  card: {
    width: '90%',
    paddingVertical: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowColor: '#000',
    elevation: 5,
  },
});
