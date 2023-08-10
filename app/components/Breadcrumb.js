import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

export const Breadcrumb = ({index, title}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        resizeMode="cover"
        imageStyle={styles.bgImage}>
        <View style={styles.outerContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.container}>
            <Text style={[styles.text, index === 1 && styles.highlighted]}>
              1
            </Text>
            <View style={styles.line} />
            <Text style={[styles.text, index === 2 && styles.highlighted]}>
              2
            </Text>
            <View style={styles.line} />
            <Text style={[styles.text, index === 3 && styles.highlighted]}>
              3
            </Text>
            <View style={styles.line} />
            <Text style={[styles.text, index === 4 && styles.highlighted]}>
              4
            </Text>
            <View style={styles.line} />
            <Text style={[styles.text, index === 5 && styles.highlighted]}>
              5
            </Text>
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
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
  },
  highlighted: {backgroundColor: '#00758c', color: '#fff'},
  bgImage: {borderBottomLeftRadius: 50},
  line: {
    height: 2,
    width: 20, // Adjust the width of the line as needed
    backgroundColor: '#fff',
  },
};
