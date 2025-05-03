import React, { useState } from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const Dashboard = () => {
const [text, setText] = useState('');
const { theme, toggleTheme } = useTheme();

const handleButtonPress = () => {
    toggleTheme();
};

return (
    <View style={{...styles.container, backgroundColor: theme?.background ?? '#fff'}}>
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Enter text here"
            placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
},
input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
},
button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
},
});

export default Dashboard;
