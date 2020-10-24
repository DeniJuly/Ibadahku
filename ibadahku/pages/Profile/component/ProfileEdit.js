import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

// ICON
import Pencil from '../../../assets/image/icons/pencil.svg';
const ProfileEdit = ({uploadPhoto, profile}) => {
    return (
        <View
            style={{
                width: '100%',
                alignItems: 'center',
                marginBottom: 30,
            }}>
            <TouchableOpacity
                onPress={() => uploadPhoto()}
                style={{
                    width: 130,
                    height: 130,
                    borderRadius: 130,
                    backgroundColor: '#dddddd',
                    overflow: 'hidden',
                }}>
                <Image width="100%" height="100%" source={{uri: profile}} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => uploadPhoto()}
                style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: '#50D890',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -40,
                    marginLeft: 100,
                }}>
                <Pencil />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileEdit;
