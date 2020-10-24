import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyle} from '../../assets/styles/global';

export default class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            nama: 'Deni Juli',
            username: 'deni',
            lokasi: 'Banjarnegara',
        };
    }
    render() {
        return (
            <View style={globalStyle.page}>
                <View style={styles.container}>
                    <Text style={styles.title}>Edit Data Profile</Text>
                    <TextInput value={this.state.nama} style={styles.input} />
                    <TextInput
                        value={this.state.username}
                        style={styles.input}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 15,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginBottom: 8,
    },
    input: {
        padding: 10,
        backgroundColor: '#ECECEC',
        borderRadius: 5,
        fontFamily: 'Poppins-Light',
        fontSize: 15,
        marginBottom: 10,
    },
});
