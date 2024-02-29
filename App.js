import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "./src/modules/dashboard/Dashboard";
import Splash from "./src/modules/splash/Splash";
import Weather from "./src/modules/weather/Weather";
import requestLocationPermission from "./src/helpers/permissions/locationPermission/requestLocationPermission";

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    console.log("location permission");
    requestLocationPermission();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;