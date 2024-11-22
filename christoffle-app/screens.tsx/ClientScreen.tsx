import React, { useState } from 'react';
import { View, Text, FlatList, Button, CheckBox, StyleSheet } from 'react-native';

const ClientScreen = ({ navigation }) => {
  const [menuSections, setMenuSections] = useState([
    {
      title: 'Three Course Meal',
      items: [
        { id: '1', name: 'Starter', description: 'Soup', price: 'R50', selected: false },
        { id: '2', name: 'Main Course', description: 'Steak', price: 'R150', selected: false },
        { id: '3', name: 'Dessert', description: 'Ice Cream', price: 'R30', selected: false },
      ],
    },
  ]);

  const handleSelectItem = (sectionIndex: number, itemId: string) => {
    const updatedMenuSections = [...menuSections];
    const itemIndex = updatedMenuSections[sectionIndex].items.findIndex(item => item.id === itemId);
    updatedMenuSections[sectionIndex].items[itemIndex].selected = !updatedMenuSections[sectionIndex].items[itemIndex].selected;
    setMenuSections(updatedMenuSections);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Client Menu</Text>
      {menuSections.map((section, sectionIndex) => (
        <View key={section.title}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <FlatList
            data={section.items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.menuItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>Price: {item.price}</Text>
                <CheckBox
                  value={item.selected}
                  onValueChange={() => handleSelectItem(sectionIndex, item.id)}
                />
              </View>
            )}
          />
        </View>
      ))}
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('CheckoutScreen')} color="#8b0000" />
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
    color: '#8b0000',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 15,
    color: '#8b0000',
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8b0000',
  },
  itemName: {
    fontWeight: 'bold',
    color: '#8b0000',
  },
});

export default ClientScreen;
