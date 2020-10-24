import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Placeholder from 'react-native-loading-placeholder/src/Placeholder';
import PlaceholderContainer from 'react-native-loading-placeholder/src/PlaceholderContainer';
import {globalStyle} from '../../assets/styles/global';
import PlaceholderCardQuran from './PlaceholderCardQuran';

const PlaceholderQuran = () => {
    const [quran, setQuran] = useState([
        {id: 1, judul: 'content'},
        {id: 2, judul: 'content'},
        {id: 3, judul: 'content'},
        {id: 4, judul: 'content'},
        {id: 5, judul: 'content'},
        {id: 6, judul: 'content'},
        {id: 7, judul: 'content'},
        {id: 8, judul: 'content'},
    ]);
    return (
        <View style={{flex: 1}}>
            {/* last read */}
            <PlaceholderContainer
                animatedComponent={<Gradient />}
                style={{
                    ...styles.lastRead,
                    ...globalStyle.placeholderContainer,
                }}
                duration={1000}
                delay={1000}>
                <Placeholder
                    style={{...styles.lastRead, ...globalStyle.placeholder}}
                />
                {/* <Text style={styles.title}>Terakhir Dibaca:</Text>
                    <Text style={styles.subtitle}>Surat Al Baqarah</Text> */}
            </PlaceholderContainer>
            {/* list */}
            <View
                style={{
                    paddingHorizontal: 20,
                    marginTop: 40,
                    marginBottom: 40,
                }}>
                {quran.map((item) => (
                    <PlaceholderCardQuran key={item.id} />
                ))}
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
    lastRead: {
        height: 70,
        marginTop: 10,
    },
});

export default PlaceholderQuran;
