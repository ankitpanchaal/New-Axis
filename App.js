import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EndScreen from './EndScreen';
import Home from './Home';

const client = new ApolloClient({
  uri: "https://new-ciw0.onrender.com/backend",
  cache: new InMemoryCache()
})

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ApolloProvider client={client} >
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='EndScreen' component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </ApolloProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
