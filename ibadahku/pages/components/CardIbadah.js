import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// ICONS
import ClockGrey from '../../assets/image/icons/clock-grey-11.svg';
import CheckGreen from '../../assets/image/icons/check-green-23.svg';
import CheckGrey from '../../assets/image/icons/check-grey-23.svg';

function CardIbadah({ibadah, jadwal}) {
  const upperCase = (str) => {
    return str.toUpperCase();
  };
  const handleIbadahClick = (ibadah) => {
    Alert.alert(
      ibadah.nama,
      ibadah.nama,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  return (
    <TouchableOpacity
      key={ibadah.id}
      onPress={() => handleIbadahClick(ibadah)}
      style={styles.CardIbadah}>
      <View>
        <Text style={styles.title}>SHALAT {upperCase(ibadah.nama)}</Text>
        <View style={styles.subtitle}>
          <ClockGrey />
          <Text style={styles.jadwal}>{jadwal[ibadah.nama]}</Text>
        </View>
      </View>
      <View>
        <CheckGrey />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CardIbadah: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jadwal: {
    marginLeft: 7,
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
});

export default CardIbadah;
