import {faArrowLeft, faListAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {openLink} from '../services/Browser';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00798c',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    color: 'white',
    size: 20,
  },
});

export const BottomBar = ({navigation, next}) => {
  return (
    <View style={styles.container}>
      {next !== 5 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(`Screen${next + 1}`)}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color={styles.icon.color}
            size={styles.icon.size}
          />
          <Text style={styles.buttonText}>التالي</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          openLink('https://www.sar.com.sa/');
        }}>
        <Text style={styles.buttonText}>ملخص</Text>
        <FontAwesomeIcon
          icon={faListAlt}
          color={styles.icon.color}
          size={styles.icon.size}
        />
      </TouchableOpacity>
    </View>
  );
};
