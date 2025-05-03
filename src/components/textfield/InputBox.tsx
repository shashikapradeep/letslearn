import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';

interface InputBoxProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
    containerStyle,
    inputStyle,
    value,
    onChangeText,
    placeholder,
    ...props
}) => {
    return (
        <TextInput
            style={[styles.input, containerStyle, inputStyle]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        marginVertical: 8,
    },
});

export default InputBox;
