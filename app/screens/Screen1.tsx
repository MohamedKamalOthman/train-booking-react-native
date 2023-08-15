// قطار الذهاب
import React from 'react';

import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';

export const Screen1 = ({navigation}: any) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
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
          <TouchableOpacity>
            <Text style={styles.fromToText}>
              من{'\n'}RYD{'\n'}الرياض
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
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
          <TouchableOpacity>
            <Text style={styles.fromToText}>
              من{'\n'}RYD{'\n'}الرياض
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInnerContainer: {
    flex: 1,
    backgroundColor: '#e7f3f7',
  },
  fromToContainer: {
    margin: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e7f3f7',
    borderColor: '#00798c',
  },
  fromToInnerContainer: {
    width: '50%',
  },
  fromToText: {
    fontSize: 20,
    fontWeight: 'bold',
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
