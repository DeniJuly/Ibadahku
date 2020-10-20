import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Placeholder from 'react-native-loading-placeholder/src/Placeholder';
import PlaceholderContainer from 'react-native-loading-placeholder/src/PlaceholderContainer';
import {globalStyle} from '../../assets/styles/global';
import PlaceholderItemDoa from './PlaceholderItemDoa';

const PlaceholderHome = () => {
    const [doa, setDoa] = useState([
        {id: 7, judul: 'Doa Ketika Makan Lupa Membaca Doa'},
        {id: 8, judul: 'Doa Ketika Makan Lupa Membaca Doa'},
        {id: 9, judul: 'Doa Ketika Makan Lupa Membaca Doa'},
        {id: 10, judul: 'Doa Ketika Makan Lupa Membaca Doa'},
        {id: 11, judul: 'Doa Ketika Makan Lupa Membaca Doa'},
        {id: 12, judul: 'Doa Ketika Makan Lupa Membaca Doa'},
    ]);
    return (
        <View style={{flex: 1}}>
            <PlaceholderContainer
                animatedComponent={<Gradient />}
                style={globalStyle.placeholderContainer}
                duration={1000}
                delay={1000}>
                <Placeholder
                    style={{...globalStyle.placeholder, ...styles.banner}}
                />
            </PlaceholderContainer>
            <View style={styles.container}>
                <PlaceholderContainer
                    animatedComponent={<Gradient />}
                    style={{...globalStyle.placeholderContainer, marginTop: 15}}
                    duration={1000}
                    delay={1000}>
                    <Placeholder
                        style={{
                            ...globalStyle.placeholder,
                            ...styles.fitur,
                        }}
                    />
                </PlaceholderContainer>
                <PlaceholderContainer
                    animatedComponent={<Gradient />}
                    style={{...globalStyle.placeholderContainer, marginTop: 15}}
                    duration={1000}
                    delay={1000}>
                    <Placeholder
                        style={{
                            ...globalStyle.placeholder,
                            ...styles.fitur,
                        }}
                    />
                </PlaceholderContainer>
                <View style={styles.doa}>
                    <PlaceholderContainer
                        animatedComponent={<Gradient />}
                        style={{
                            ...globalStyle.placeholderContainer,
                            ...styles.titleDoa,
                        }}
                        duration={1000}
                        delay={1000}>
                        <Placeholder
                            style={{
                                ...globalStyle.placeholder,
                                ...styles.titleDoa,
                            }}
                        />
                    </PlaceholderContainer>
                    <FlatList
                        data={doa}
                        keyExtractor={(item) => item.id}
                        renderItem={() => <PlaceholderItemDoa />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
};

const Gradient = () => {
    return (
        <LinearGradient
            colors={['#eeeeee', '#dddddd', '#eeeeee']}
            start={{x: 1.0, y: 0.0}}
            end={{x: 0.0, y: 0.0}}
            style={{
                flex: 1,
                width: 120,
            }}
        />
    );
};

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 260,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        overflow: 'hidden',
    },
    container: {
        paddingHorizontal: 20,
        flex: 1,
        paddingBottom: 20,
    },
    fitur: {
        width: '100%',
        height: 70,
        borderRadius: 5,
    },
    itemFitur: {
        alignItems: 'center',
    },
    itemFiturText: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        marginTop: 5,
    },
    quran: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ececec',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    quranContent: {
        marginLeft: 10,
    },
    quranTitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
    },
    quranText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    doa: {
        marginTop: 15,
    },
    titleDoa: {
        width: 80,
        height: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    doaItem: {
        marginLeft: 5,
        width: 84,
        height: 117,
        alignItems: 'center',
    },
    doaTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        width: 75,
        marginTop: -112,
        color: 'rgba(0,0,0,.8)',
    },
});
export default PlaceholderHome;
