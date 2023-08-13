/* eslint-disable react-native/no-inline-styles */
// قطار الذهاب
import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const numberOfSeats = 102; // Change this to the number of seats you want

const seats_: {
  id: number;
  key: number;
  seatNumber: string;
  isSelected: boolean;
  isReserved: boolean;
}[] = [];

for (let i = 1; i <= numberOfSeats; i++) {
  const seat = {
    id: i,
    key: i,
    seatNumber: i.toString(),
    isSelected: false,
    isReserved: Math.random() < 0.5, // Generating random reservation status
  };

  seats_.push(seat);
}

export const Screen2 = () => {
  const [seats, setSeats] = React.useState(seats_);
  const selectSeat = (id: number) => {
    const seatIndex = seats.findIndex(seat => seat.id === id);
    const newSeats = [...seats];
    newSeats[seatIndex] = {
      ...newSeats[seatIndex],
      isSelected: !newSeats[seatIndex].isSelected,
    };
    setSeats(newSeats);
  };
  const renderSeats = () => {
    const jsx = [];

    for (let i = 1; i <= numberOfSeats; i += 4) {
      // only push every 8 seats
      if ((i - 1) % 8 === 0 && i !== 1) {
        jsx.push(
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginVertical: 10,
            }}>
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: '#00798c',
                borderTopEndRadius: 30,
                borderBottomEndRadius: 30,
              }}
            />
            <View
              style={{
                width: 100,
                height: 50,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: '#00798c',
              }}
            />
          </View>,
        );
      }

      jsx.push(
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{flexDirection: 'row'}}>
            {seats.slice(i - 1, i + 1).map(seat => {
              return (
                <TouchableOpacity onPress={() => selectSeat(seat.id)}>
                  <View
                    key={seat.id}
                    style={[
                      {
                        borderColor: '#00798c',
                        borderWidth: 2,
                        padding: 5,
                        margin: 5,
                        borderRadius: 5,
                      },
                      seat.isReserved && styles.seatReserved,
                      seat.isSelected && styles.seatSelected,
                    ]}>
                    <Text
                      style={[
                        {
                          fontWeight: 'bold',
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          fontSize: 20,
                          width: 50,
                          height: 50,
                          color: '#00798c',
                        },
                        seat.isReserved && styles.seatReservedText,
                        seat.isSelected && styles.seatSelectedText,
                      ]}>
                      {seat.seatNumber}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{flexDirection: 'row'}}>
            {seats.slice(i + 1, i + 3).map(seat => {
              return (
                <TouchableOpacity onPress={() => selectSeat(seat.id)}>
                  <View
                    key={seat.id.toString()}
                    style={[
                      {
                        borderColor: '#00798c',
                        borderWidth: 2,
                        padding: 5,
                        margin: 5,
                        borderRadius: 5,
                      },
                      seat.isReserved && styles.seatReserved,
                      seat.isSelected && styles.seatSelected,
                    ]}>
                    <Text
                      style={[
                        {
                          fontWeight: 'bold',
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          fontSize: 20,
                          width: 50,
                          height: 50,
                          color: '#00798c',
                        },
                        seat.isReserved && styles.seatReservedText,
                        seat.isSelected && styles.seatSelectedText,
                      ]}>
                      {seat.seatNumber}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>,
      );
    }

    return jsx;
  };
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>{renderSeats()}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e7f7ff',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
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
  seatReserved: {
    backgroundColor: '#b5d7de',
    borderWidth: 0,
  },
  seatReservedText: {
    color: '#00798c',
  },
  seatSelected: {
    backgroundColor: '#00798c',
    borderWidth: 0,
  },
  seatSelectedText: {
    color: 'white',
  },
});
