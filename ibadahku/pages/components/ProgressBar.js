import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function ProgressBar(props){
    const { bgColor, completed } = props;
    const completedStyle = StyleSheet.create({
        style : {
            width: `${completed}%`,
            backgroundColor: bgColor
        }
    });

    return (
        <View style={styles.progressBar}>
            <View style={{
                ...completedStyle.style,
                ...styles.completed
            }}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 12,
        width: '100%',
        backgroundColor: '#A7EBC7',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 5
    },
    completed: {
        height: '100%'
    }
})

export default ProgressBar;