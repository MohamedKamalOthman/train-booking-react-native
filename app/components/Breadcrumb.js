import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

export const Breadcrumb = ({index, nav}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        resizeMode="cover"
        imageStyle={styles.bgImage}>
        <View style={styles.outerContainer}>
          <Text style={styles.title}>{titles[index - 1]}</Text>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => nav.navigate('Screen1')}>
              <Text style={[styles.text, index >= 1 && styles.highlighted]}>
                1
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => nav.navigate('Screen2')}>
              <Text style={[styles.text, index >= 2 && styles.highlighted]}>
                2
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => nav.navigate('Screen3')}>
              <Text style={[styles.text, index >= 3 && styles.highlighted]}>
                3
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => nav.navigate('Screen4')}>
              <Text style={[styles.text, index >= 4 && styles.highlighted]}>
                4
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => nav.navigate('Screen5')}>
              <Text style={[styles.text, index >= 5 && styles.highlighted]}>
                5
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  outerContainer: {
    justifyContent: 'center',
    borderRadius: 10,
    height: 150,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    backgroundColor: '#fff',
    width: 34,
    height: 34,
    textAlign: 'center',
    borderRadius: 20,
    color: '#00758c',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    textAlignVertical: 'center',
  },
  highlighted: {backgroundColor: '#00758c', color: '#fff'},
  bgImage: {borderBottomLeftRadius: 50},
  line: {
    height: 2,
    width: 20, // Adjust the width of the line as needed
    backgroundColor: '#fff',
  },
};

const titles = [
  'قطار الذهاب',
  'تفاصيل الركاب',
  'قطار العودة',
  'تفاصيل الدفع',
  'مراجعة الطلب',
];
