import { createAppContainer } from 'react-navigation';
import * as React from 'react';
//import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/Splash1';
import Splash2Screen from './src/screens/Splash2';
import Splash3Screen from './src/screens/Splash3';
import Splash4Screen from './src/screens/Splash4';
import Main from './src/screens/Main';
import ResultScreen from './src/screens/ResultsScreen';
import CartScreen from './src/screens/CartScreen';
import {Provider} from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();
function App(){
  return (
    <Provider store = {store}>
       <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash1" component={SplashScreen}
              options={{ 
              headerShown: false
              }}
            />
            <Stack.Screen name="Splash2" component={Splash2Screen}
              options={{
              headerShown: false
              }}
            />
            <Stack.Screen name="Splash3" component={Splash3Screen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Splash4" component={Splash4Screen}
              options={{
                headerShown: false
              }}
            />
        <Stack.Screen name="Main" component={Main} 
        options = {{
          headerShown: false
          
          
        }} 
         />
         <Stack.Screen name="ResultScreen" component={ResultScreen} 
        options = {{
          headerShown: false
        }} 
         />
         <Stack.Screen name="Cart" component={CartScreen} 
        options = {{
          headerShown: false
        }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
      </Provider>
  );
}

export default App;