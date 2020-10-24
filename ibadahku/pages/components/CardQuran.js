import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CardQuran = (props) => {
    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('QuranDetail', {
                    NOMOR: props.surat.nomor,
                })
            }
            style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.number}>{props.i + 1}</Text>
                <View style={styles.content}>
                    <Text style={styles.surat}>{props.surat.nama}</Text>
                    <View style={styles.subcontent}>
                        <Text style={styles.arti}>{props.surat.arti}</Text>
                        <Text style={styles.ayat}>({props.surat.ayat})</Text>
                    </View>
                </View>
            </View>
            <Text>{props.surat.asma}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    number: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: 'black',
        marginRight: 8,
    },
    content: {
        marginLeft: 10,
    },
    surat: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    subcontent: {
        flexDirection: 'row',
    },
    arti: {
        fontSize: 13,
        fontFamily: 'Popping-Light',
        marginTop: -5,
    },
    ayat: {
        fontSize: 13,
        fontFamily: 'Popping-Light',
        marginTop: -5,
        marginLeft: 5,
    },
});
export default CardQuran;
