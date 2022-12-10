import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorUi from './calculatorui/CalculatorUi';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorUi />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D31',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
