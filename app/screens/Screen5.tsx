// قطار الذهاب
import {
  faArrowRightArrowLeft,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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
    <ScrollView style={styles.whiteBackground}>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View>
            <View style={styles.innerContainer}>
              <Text style={[styles.textAlign, styles.textGrey]}>
                {'3 مسافرين'}
              </Text>
              <FontAwesomeIcon icon={faUsers} size={22} color="grey" />
            </View>
            <Text style={styles.textDark}>{'420 ر.س'}</Text>
            <Text style={[styles.textAlign, styles.textGrey]}>
              {'السعر الكلي'}
            </Text>
          </View>
          <View style={styles.container2}>
            <View>
              <Text style={[styles.textAlign, styles.textDark]}>{'DMM'}</Text>
              <Text style={[styles.textAlign, styles.textGrey]}>
                {'العودة'}
              </Text>
              <Text style={[styles.textAlign, styles.textGrey]}>
                {new Date().toLocaleDateString('en')}
              </Text>
            </View>
            <View style={styles.spacer}>
              <FontAwesomeIcon
                icon={faArrowRightArrowLeft}
                size={22}
                color="grey"
              />
            </View>
            <View>
              <Text style={[styles.textAlign, styles.textDark]}>{'RYD'}</Text>
              <Text style={[styles.textAlign, styles.textGrey]}>
                {'الذهاب'}
              </Text>
              <Text style={[styles.textAlign, styles.textGrey]}>
                {new Date().toLocaleDateString('en')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
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
  whiteBackground: {
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
  line: {
    borderBottomWidth: 0.7,
    width: '90%',
    height: 10,
    borderColor: 'grey',
  },
  firstContainer: {
    width: '90%',
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAlign: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textGrey: {
    color: 'grey',
    fontSize: 12,
  },
  textDark: {fontSize: 22, fontWeight: 'bold', color: '#00798c'},
  innerContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  spacer: {marginHorizontal: 5},
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
