import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OutlinedButton, TextOutlined } from './components/OutlinedButton';

export default function App() {
  return (
    <View style={styles.container}>
     <OutlinedButton title={'Entrar'} textSize={25} onPress={() => console.log("Entrou")}/>
    </View>
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
