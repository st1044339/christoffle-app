import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import LoginScreen from './screens.tsx/LoginScreen';
import AddItemScreen from './screens.tsx/AddItemScreen';
import PreparedMenuScreen from './screens.tsx/PreparedMenuScreen';
import ChefDashboardScreen from './screens.tsx/ChefDashboardScreen';
import ClientScreen from './screens.tsx/ClientScreen';
import ReceiptScreen from './screens.tsx/ReceiptScreen';




const Stack = createStackNavigator();

export default function App() {
  const [menu, setMenu] = useState<any[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AddItemScreen">
          {(props: any) => <AddItemScreen {...props} menu={menu} setMenu={setMenu} />}
        </Stack.Screen>
        <Stack.Screen name="PreparedMenuScreen">
          {(props: any) => <PreparedMenuScreen {...props} menu={menu} setMenu={setMenu} />}
        </Stack.Screen>
        <Stack.Screen name="ChefDashboardScreen" component={ChefDashboardScreen} />
        <Stack.Screen name="ClientScreen" component={ClientScreen} />
        <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

