// @generated: @expo/next-adapter@3.1.19
import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { Card } from './../components';

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(() =>
    fetch('https://randomuser.me/api/?results=20')
      .then((results) => results.json())
      .then((data) => setUsers(data.results))
  );

  useEffect(() => fetchData(), []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, []);
  debugger;

  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.text}>🌈TO 4ever</Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.cardRow}>
          {users.map((user) => (
            <Card key={user.login.uuid} text={user.name.first} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  scrollView: {
    // flex: 1,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 32,
  },
});
