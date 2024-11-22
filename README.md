Chef App Changelog
Version 1.0.0
Week of Development
November 18, 2024 - November 22, 2024

General Updates
Converted screens and components to TypeScript to leverage better type safety and debugging tools.
Separated screens into modular files for easier maintenance and scalability.
Fixed issues related to deprecated or incorrectly used components, such as the Picker.
Implemented React Navigation for structured navigation between screens.

Screens
Login Screen
Added buttons for Chef, Cindi, and Bonnie, each navigating to specific functionalities (e.g., AddItemScreen or showing placeholder alerts).
Styled with consistent dark red theme.

Add Item Screen
Created a screen to:
Add menu items, including name, description, course, and price.
Integrated @react-native-picker/picker for the course selection dropdown.
Form validation to ensure no field is left empty.
Navigation to PreparedMenuScreen with updated menu data.
Added modular props to handle menu state and pass it via navigation routes.
Fixed TypeScript issues with navigation and route.

Prepared Menu Screen
Built a screen to display the prepared menu list:
Displays item details: name, description, course, and price.
Added functionality to remove an item from the menu.
Provided buttons to:
Add more items (AddItemScreen).
Navigate to the Chef’s Dashboard (ChefDashboardScreen).
Connected state between AddItemScreen and PreparedMenuScreen.

Chef Dashboard Screen
Added a dashboard to view client orders, including:
Dynamic rendering of clients’ names, order dates, and orders.
Horizontal scroll for client orders.
Logout button to return to LoginScreen.

Client Screen
Designed a screen for clients to:
View menu sections (e.g., appetizers, desserts, meals).
Select items using checkboxes.
Calculate the total price of selected items.
Navigate to the ReceiptScreen with selected items and the total price.

Receipt Screen
Added a screen to:
Display selected items and their prices.
Show the total price of the client’s order.
Logout button to return to the ClientScreen.

Features and Functionality
State Management:
Used useState for managing menu and selected items.
Passed menu and setMenu props dynamically between screens.

TypeScript Integration:
Added type definitions for props (navigation and route) using StackScreenProps from @react-navigation/stack.
Enhanced code reliability and maintainability.

React Navigation:
Configured a stack navigator using @react-navigation/stack.
Resolved issues with nested navigation for ClientScreen and ReceiptScreen.

Validation and Alerts:
Ensured all fields on the AddItemScreen are filled before allowing the user to proceed.
Used Alert to handle validation errors.

Styling
Applied a consistent dark red theme (#8b0000) across all buttons.
Styled screens with clean layouts using StyleSheet to enhance UI.
Added responsive design elements for FlatList and Picker.
Fixes and Enhancements

Fixed Picker Issues:
Replaced deprecated Picker from react-native with @react-native-picker/picker.
Updated imports and ensured compatibility.
Resolved Nested Stack Navigation:
Correctly implemented Stack.Screen with dynamic props for ClientScreen and ReceiptScreen.

Bug Fixes:
Corrected navigation route issues.
Prevented crashes by ensuring props and state are passed correctly.
Dependencies Added
@react-native-picker/picker:

For the dropdown menu in AddItemScreen.
@react-navigation/native & stack:

For screen navigation.
@types/react-native:
To provide TypeScript support for React Native components.

Future Improvements:
Add persistent storage for menus and client orders using AsyncStorage or a backend API.
Enhance the UI with libraries like React Native Paper or Material UI.
Implement user authentication for secure logins.
Add unit and integration tests for critical functionalities.
