import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Search = ({input}) => {
    return (
        <TextInput
            style={styles.input}
            placeholder="Mau baca Surat apa?"
            value={input}
        />
    );
};
const styles = StyleSheet.create({
    input: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderColor: '#c4c4c4',
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'Poppins-Light',
        fontSize: 15,
    },
});
export default Search;
