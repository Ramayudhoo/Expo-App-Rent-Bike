import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

const Transaksi = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Transaksi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    margin: 2,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 4,
    padding: 6,
    width: '90%',
    height:'55%'
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})


export default Transaksi;

