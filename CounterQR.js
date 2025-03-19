import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CounterQR = ({ route }) => {
  const username = route?.params?.username || 'Guest'; // Fallback value for username
  const [count, setCount] = useState(0);
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    if (!username) {
      alert('Username is missing!');
      return;
    }
    setShowQR(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {username}</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(c => c + 1)} />
        <Button title="-" onPress={() => setCount(c => Math.max(c - 1, 0))} />
      </View>

      <Button title="GENERATE QR" onPress={handleGenerateQR} />

      {showQR && (
        <QRCode
          value={JSON.stringify({ Name: username, Count: count })} // JSON format for better compatibility
          size={200}
          backgroundColor="white"
          color="black"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
});

export default CounterQR;
