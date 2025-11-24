import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from '../screens/Tab';

const StackNav = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen
          name="Tab"
          component={Tab}
          options={{ headerShown: false }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
