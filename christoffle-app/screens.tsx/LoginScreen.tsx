import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Christoffle</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Chef"
          onPress={() => navigation.navigate('AddItemScreen')}
          color="#8b0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cindi"
          onPress={() => Alert.alert('Client1 functionality not implemented')}
          color="#8b0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Bonnie"
          onPress={() => Alert.alert('Client2 functionality not implemented')}
          color="#8b0000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fffacd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b0000',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default LoginScreen;
