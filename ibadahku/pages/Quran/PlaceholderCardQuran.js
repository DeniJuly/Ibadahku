import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Placeholder from 'react-native-loading-placeholder/src/Placeholder';
import PlaceholderContainer from 'react-native-loading-placeholder/src/PlaceholderContainer';
import {globalStyle} from '../../assets/styles/global';

const PlaceholderCardQuran = () => {
    return (
        <PlaceholderContainer
            animatedComponent={<Gradient />}
            style={{
                ...styles.container,
                ...globalStyle.placeholderContainer,
            }}
            delay={1000}
            duration={1000}>
            <Placeholder style={{...globalStyle.placeholder}} />
        </PlaceholderContainer>
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
    container: {
        height: 60,
        marginBottom: 10,
    },
});
export default PlaceholderCardQuran;
