import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './screens/MainPage';
import Viewer from './screens/ViewerPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: '#1E88FF' },
            // headerShown: false,
            headerTitleStyle: { alignSelf: 'center' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={MainPage}
            options={{
              title: 'Notes',
              color: '#1E88E5',
            }}
          />
          <Stack.Screen
            name="Viewer"
            component={Viewer}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
