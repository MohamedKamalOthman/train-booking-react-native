import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const numberOfSeats = 102; // Change this to the number of seats you want

const seats_: any[] | (() => any[]) = [];

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

export const Screen3 = () => {
  const [seats, setSeats] = React.useState(seats_);

  const selectSeat = (id: number) => {
    const seatIndex = id - 1;
    setSeats((prevSeats: any[]) => {
      const newSeats = [...prevSeats];
      newSeats[seatIndex].isSelected = !newSeats[seatIndex].isSelected;
      return newSeats;
    });
  };

  const renderSeats = () => {
    const jsx = [];

    for (let i = 1; i <= numberOfSeats; i += 4) {
      // only push every 8 seats
      if ((i - 1) % 8 === 0 && i !== 1) {
        jsx.push(
          <View key={i.toString() + Math.random()} style={styles.rowContainer}>
            <View style={[styles.rowSection, styles.leftSeatRow]} />
            <View style={[styles.rowSection, styles.rightSeatRow]} />
          </View>,
        );
      }

      jsx.push(
        <View key={i.toString() + Math.random()} style={styles.rowContainer}>
          <View style={styles.row}>
            {seats.slice(i - 1, i + 1).map(seat => (
              <TouchableOpacity
                disabled={seat.isReserved}
                key={seat.id.toString() + Math.random()}
                onPress={() => selectSeat(seat.id)}>
                <View
                  style={[
                    styles.seat,
                    seat.isReserved && styles.seatReserved,
                    seat.isSelected && styles.seatSelected,
                  ]}>
                  <Text
                    style={[
                      styles.seatText,
                      seat.isReserved && styles.seatReservedText,
                      seat.isSelected && styles.seatSelectedText,
                    ]}>
                    {seat.seatNumber}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {seats.slice(i + 1, i + 3).map(seat => (
              <TouchableOpacity
                disabled={seat.isReserved}
                key={seat.id.toString() + Math.random()}
                onPress={() => selectSeat(seat.id)}>
                <View
                  style={[
                    styles.seat,
                    seat.isReserved && styles.seatReserved,
                    seat.isSelected && styles.seatSelected,
                  ]}>
                  <Text
                    style={[
                      styles.seatText,
                      seat.isReserved && styles.seatReservedText,
                      seat.isSelected && styles.seatSelectedText,
                    ]}>
                    {seat.seatNumber}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>,
      );
    }

    return jsx;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>{renderSeats()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#e7f7ff',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  rowSection: {
    width: 100,
    height: 50,
    backgroundColor: '#00798c',
  },
  leftSeatRow: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  rightSeatRow: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  row: {
    flexDirection: 'row',
  },
  seat: {
    borderColor: '#00798c',
    borderWidth: 2,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  seatText: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    width: 50,
    height: 50,
    color: '#00798c',
  },
  seatReserved: {
    backgroundColor: '#b5d7de',
    borderWidth: 0,
  },
  seatReservedText: {
    color: '#00798c',
    width: 54,
    height: 54,
  },
  seatSelected: {
    backgroundColor: '#00798c',
    borderWidth: 0,
  },
  seatSelectedText: {
    color: 'white',
    width: 54,
    height: 54,
  },
});
