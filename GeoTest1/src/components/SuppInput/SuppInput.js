import { View, Text, TextInput, } from "react-native";
import React from "react";
import styles from "./SuppInput.style";

const SuppInput = ({ label, onChangeText, placeHolder, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {label} </Text>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
        </View>
    );
};

export default SuppInput;