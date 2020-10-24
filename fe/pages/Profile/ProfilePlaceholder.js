import React, {Component} from 'react';
import {
    PlaceholderContainer,
    Placeholder,
} from 'react-native-loading-placeholder';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {globalStyle} from '../../assets/styles/global';

const ProfilePlaceholder = () => {
    return (
        <View style={styles.profile}>
            <PlaceholderContainer
                style={{
                    ...globalStyle.placeholderContainer,
                    ...styles.imageProfile,
                }}
                animatedComponent={<Gradient />}
                duration={1000}
                delay={1000}>
                <Placeholder
                    style={{...globalStyle.placeholder, ...styles.imageProfile}}
                />
            </PlaceholderContainer>
            <View style={styles.detailProfile}>
                <PlaceholderContainer
                    style={{
                        ...globalStyle.placeholderContainer,
                        ...styles.nama,
                    }}
                    animatedComponent={<Gradient />}
                    duration={1000}
                    delay={1000}>
                    <Placeholder
                        style={{...globalStyle.placeholder, ...styles.nama}}
                    />
                </PlaceholderContainer>
                <PlaceholderContainer
                    style={{
                        ...globalStyle.placeholderContainer,
                        ...styles.nama,
                    }}
                    animatedComponent={<Gradient />}
                    duration={1000}
                    delay={1000}>
                    <Placeholder
                        style={{...globalStyle.placeholder, ...styles.nama}}
                    />
                </PlaceholderContainer>
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
    profile: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    detailProfile: {
        marginLeft: 10,
    },
    nama: {
        fontFamily: 'Poppins-Medium',
        width: 200,
        height: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default ProfilePlaceholder;
