import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './SignInput.style';

const SignInput = ({ label, onChangeText, placeHolder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {label} </Text>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry} />
            </View>
        </View>
    );
};

export default SignInput;