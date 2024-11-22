import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type Item = {
  id: string;
  name: string;
  price: number;
};

type ReceiptScreenProps = {
  navigation: StackNavigationProp<any, 'Receipt'>;
  route: RouteProp<{ params: { selectedItems: Item[] } }, 'params'>;
};

const ReceiptScreen: React.FC<ReceiptScreenProps> = ({ navigation, route }) => {
  const { selectedItems } = route.params;

  // Calculate the total price
  const totalPrice = selectedItems.reduce((sum: any, item: { price: any; }) => sum + item.price, 0);

  const handleFinalizeOrder = () => {
    alert('Order finalized! Thank you for choosing Chef Christoffle.');
    navigation.navigate('Client');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt</Text>

      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>
            {item.name} - R{item.price.toFixed(2)}
          </Text>
        )}
      />

      <Text style={styles.totalText}>Total Price: R{totalPrice.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Finalize Order" onPress={handleFinalizeOrder} color="#8b0000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffacd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8b0000',
  },
  itemText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
});

export default ReceiptScreen;
