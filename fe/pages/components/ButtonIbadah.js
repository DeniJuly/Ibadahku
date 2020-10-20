import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ButtonIbadah(props) {
    return (
        <View
            style={{
                borderColor: props.color,
                borderWidth: 1.5,
                backgroundColor: '#FFFFFF',
                ...styles.button,
            }}>
            <Text
                style={{
                    color: props.color,
                    ...styles.text,
                }}>
                {props.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderRadius: 3,
        width: '100%',
        height: 40,
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        textAlign: 'center',
    },
});
export default ButtonIbadah;
