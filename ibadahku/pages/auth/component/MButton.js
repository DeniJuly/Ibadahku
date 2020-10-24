import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const MButton = ({label, onPress, submit, disabled}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={styles.button(disabled)}>
            <Text
                style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#FFFFFF',
                    textAlign: 'center',
                }}>
                {!submit ? (
                    label
                ) : (
                    <ActivityIndicator color="#ffffff" size="small" />
                )}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: (disabled) => ({
        width: '100%',
        height: 40,
        backgroundColor: disabled ? '#76F0B0' : '#50D890',
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
    }),
});
export default MButton;
