import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemQuran = ({ayat, arti, nomor}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.nomor}>
                    <Text style={styles.nomorText}>{nomor}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text
                        style={{marginLeft: 14, fontSize: 18, lineHeight: 25}}>
                        {ayat}
                    </Text>
                </View>
            </View>
            <Text style={styles.arti}>{arti}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
        paddingTop: 15,
        paddingHorizontal: 25,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nomor: {
        backgroundColor: '#ECECEC',
        borderRadius: 3,
        paddingVertical: 2,
        paddingHorizontal: 7,
        height: 25,
    },
    nomorText: {
        fontFamily: 'Poppins-Light',
        fontSize: 15,
    },
    arti: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    },
});
export default ItemQuran;
