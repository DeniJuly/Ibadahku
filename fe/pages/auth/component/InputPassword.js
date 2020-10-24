import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import ShowPass from '../../../assets/image/icons/show-password.svg';
import HidePass from '../../../assets/image/icons/hide-password.svg';
import {globalStyle} from '../../../assets/styles/global';

const InputPassword = ({password, hide_password, onPress, handleChange}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <TextInput
                onChangeText={(val) => handleChange('password', val)}
                value={password}
                style={{
                    ...globalStyle.input,
                    width: '88%',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                }}
                placeholder="Password"
                secureTextEntry={hide_password}
            />
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: '#ECECEC',
                    fontFamily: 'Poppins-Light',
                    fontSize: 15,
                    marginBottom: 10,
                    width: '12%',
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {hide_password ? <ShowPass /> : <HidePass />}
            </TouchableOpacity>
        </View>
    );
};

export default InputPassword;
