import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Alert, StyleSheet } from 'react-native';

function AddItemScreen({ navigation, route }) {
  const { menu, setMenu } = route.params;
  const [menuName, setMenuName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (!menuName || !description || !course || !price) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: menuName,
      description,
      course,
      price,
    };

    const updatedMenu = [...menu, newItem];
    setMenu(updatedMenu);
    navigation.navigate('PreparedMenuScreen', { menu: updatedMenu, setMenu });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput placeholder="Menu" style={styles.input} onChangeText={setMenuName} value={menuName} />
      <TextInput placeholder="Description" style={styles.input} onChangeText={setDescription} value={description} />
      <Picker selectedValue={course} style={styles.input} onValueChange={(itemValue: React.SetStateAction<string>) => setCourse(itemValue)}>
        <Picker.Item label="Select a Course" value="" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Two Course Meal" value="Two Course meal" />
        <Picker.Item label="Three Course Meal" value="Three Course meal" />
        <Picker.Item label="Four Course Meal" value="Four Course meal" />
        <Picker.Item label="Five Course Meal" value="Five Course meal" />
        <Picker.Item label="Six Course Meal" value="Six Course meal" />
        <Picker.Item label="Seven Course Meal" value="Seven Course meal" />
        <Picker.Item label="Eight Course Meal" value="Eight Course meal" />
        <Picker.Item label="Nine Course Meal" value="Nine Course meal" />
        <Picker.Item label="Ten Course Meal" value="Ten Course meal" />
        <Picker.Item label="Eleven Course" value="Eleven Course meal" />
        <Picker.Item label="Twelve Course Meal" value="Twelve Course meal" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      <TextInput placeholder="Price" style={styles.input} onChangeText={setPrice} value={price} keyboardType="numeric" />
      <Button title="Save" onPress={handleSave} color="#8b0000" />
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
  input: {
    borderWidth: 1,
    borderColor: '#8b0000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AddItemScreen;
