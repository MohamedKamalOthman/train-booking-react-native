// قطار الذهاب
import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Screen5 = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/images/sdad.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>{'فاتورة سداد'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: 'https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png',
              }}
              style={styles.image}
            />
            <Text style={styles.cardText}>{'بطاقة إتمان'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: 'https://seeklogo.com/images/F/fawry-logo-FD61F19B43-seeklogo.com.png',
              }}
              style={styles.image}
            />
            <Text style={styles.cardText}>{'فوري'}</Text>
          </TouchableOpacity>
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
  card: {
    marginTop: 20,
    width: '40%',
    height: 150,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardText: {
    fontSize: 16,
    color: 'black',
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '90%',
    height: 50,
    resizeMode: 'contain',
  },
});
