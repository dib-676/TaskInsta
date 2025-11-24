import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationStack from '../navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} />
        <NavigationStack />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default App;
