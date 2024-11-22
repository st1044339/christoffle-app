import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

// Define the structure of client data
type Client = {
  id: string;
  name: string;
  date: string;
  orders: string[];
};

// Props for ChefDashboardScreen
type ChefDashboardScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ChefDashboardScreen'>;
  route: RouteProp<RootStackParamList, 'ChefDashboardScreen'>;
};

function ChefDashboardScreen({ navigation }: ChefDashboardScreenProps) {
  const clients: Client[] = [
    {
      id: '1',
      name: 'Cindi',
      date: '12 November 2024',
      orders: ['Steak', 'Chicken Stew', 'Garlic Bread', 'Ice Cream'],
    },
    {
      id: '2',
      name: 'Bonnie',
      date: '11 November 2024',
      orders: ['Sushi', 'Chocolate Cake'],
    },
  ];

  const renderClient = ({ item }: { item: Client }) => (
    <View style={styles.clientCard}>
      <Text style={styles.clientName}>{item.name}</Text>
      <Text style={styles.clientDate}>{item.date}</Text>
      <FlatList
        data={item.orders}
        renderItem={({ item: order }) => <Text style={styles.orderItem}>{order}</Text>}
        keyExtractor={(order, index) => `${item.id}-${index}`}
        horizontal
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Dashboard</Text>
      <FlatList
        data={clients}
        renderItem={renderClient}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Logout"
        onPress={() => navigation.navigate('LoginScreen')}
        color="#8b0000"
      />
    </View>
  );
}

export default ChefDashboardScreen;

// Styles
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
    color: '#8b0000',
    textAlign: 'center',
  },
  clientCard: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8b0000',
  },
  clientDate: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  orderItem: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#8b0000',
    padding: 8,
    borderRadius: 8,
  },
});
