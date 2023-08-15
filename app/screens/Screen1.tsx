// قطار الذهاب
import React from 'react';

import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
export const Screen1 = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [openTo, setOpenTo] = React.useState(false);
  const [dateTo, setDateTo] = React.useState(new Date());
  const [openFrom, setOpenFrom] = React.useState(false);
  const [dateFrom, setDateFrom] = React.useState(new Date());
  return (
    <View style={styles.container}>
      <View style={styles.fromToContainer}>
        <View style={[styles.fromToInnerContainer, {borderRightWidth: 1}]}>
          <TouchableOpacity>
            <Text style={styles.fromToText}>
              الي{'\n'}DMM{'\n'}الدمام
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fromToInnerContainer}>
          <TouchableOpacity>
            <Text style={styles.fromToText}>
              من{'\n'}RYD{'\n'}الرياض
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.dateInnerContainer}>
          <DatePicker
            modal
            mode="date"
            locale="ar"
            title={'اختر التاريخ من'}
            open={openTo}
            date={dateTo}
            onConfirm={date => {
              setOpenTo(false);
              setDateTo(date);
            }}
            onCancel={() => {
              setOpenTo(false);
            }}
          />

          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => {
              setOpenTo(true);
            }}>
            <FontAwesomeIcon icon={faCalendarAlt} size={20} color="#00798c" />
            <Text style={styles.fromToTextDate}>الذهاب</Text>
            <Text style={styles.fromToText}>
              {dateTo.toLocaleDateString('ar-EG-u-nu-latn', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 1.2, justifyContent: 'center', alignItems: 'center'}}>
          <Text>رحلة العودة</Text>
          <Switch
            trackColor={{false: '#e7f3f9', true: '#5e5e5e'}}
            thumbColor={isEnabled ? '#3e3e3e' : '#00798c'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
        <View style={styles.dateInnerContainer}>
          <DatePicker
            modal
            mode="date"
            locale="ar"
            title={'اختر التاريخ الي'}
            open={openFrom}
            date={dateFrom}
            onConfirm={date => {
              setOpenFrom(false);
              setDateFrom(date);
            }}
            onCancel={() => {
              setOpenFrom(false);
            }}
          />
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => {
              setOpenFrom(true);
            }}>
            <FontAwesomeIcon icon={faCalendarAlt} size={20} color="#00798c" />
            <Text style={styles.fromToTextDate}>العودة</Text>
            <Text style={styles.fromToText}>
              {dateFrom.toLocaleDateString('ar-EG-u-nu-latn', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dateContainer: {
    margin: 20,
    borderRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  dateInnerContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#e7f3f7',
  },
  fromToContainer: {
    margin: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e7f3f7',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  fromToInnerContainer: {
    width: '50%',
    borderColor: '#00798c',
  },
  fromToText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00798c',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  fromToTextDate: {
    fontSize: 16,
    color: '#00798c',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
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
