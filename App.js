import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootStack from './src/navigation/StackNavigator';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
});
