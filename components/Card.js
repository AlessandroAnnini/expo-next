import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Card = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    flex: 1,
    backgroundColor: '#d0e',
    padding: 16,
    height: 64,
    margin: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
