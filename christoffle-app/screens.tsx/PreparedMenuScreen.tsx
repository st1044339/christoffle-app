import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

function PreparedMenuScreen({ navigation, route }: Props) {
  const { menu, setMenu } = route.params;

  const handleRemove = (id: string) => {
    const updatedMenu = menu.filter((item: { id: string; }) => item.id !== id);
    setMenu(updatedMenu);
    navigation.setParams({ menu: updatedMenu });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prepared Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>Description: {item.description}</Text>
            <Text style={styles.itemText}>Course: {item.course}</Text>
            <Text style={styles.itemText}>Price: R{item.price}</Text>
            <Button title="Remove" onPress={() => handleRemove(item.id)} color="#8b0000" />
          </View>
        )}
      />
      <Button
        title="Add More Items"
        onPress={() => navigation.navigate('AddItemScreen', { menu, setMenu })}
        color="#8b0000"
      />
      <Button
        title="View Chef's Dashboard"
        onPress={() => navigation.navigate('ChefDashboardScreen')}
        color="#8b0000"
      />
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
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#8b0000',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PreparedMenuScreen;
