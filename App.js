import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './screens/MainPage';
import Viewer from './screens/ViewerPage';

const Stack = createStackNavigator();

/**
 *
 * TODOS:
 * implement redux
 * clean up navigation drilling
 *
 */

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: '#1E88FF' },
            // headerShown: false,
            headerTitleStyle: { alignSelf: 'center' },
            headerBackTitleStyle: {},
          }}
        >
          <Stack.Screen
            name="Home"
            component={MainPage}
            options={{
              title: 'Notes',
            }}
          />
          <Stack.Screen
            name="Viewer"
            component={Viewer}
            options={({
              route: {
                params: { title },
              },
            }) => ({ title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
