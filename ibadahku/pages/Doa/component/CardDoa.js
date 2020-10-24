import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Icon
import DoaIcon from '../../../assets/image/icons/doa-green-30.svg';
import Next from '../../../assets/image/icons/next-grey-15.svg';

const CardDoa = ({doa, navigation}) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('DoaDetail', {
                    ID: doa.id,
                })
            }
            key={doa.id}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderColor: '#ECECEC',
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 5,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <DoaIcon />
                <Text
                    style={{
                        fontFamily: 'Poppins-Medium',
                        marginLeft: 10,
                        fontSize: 15,
                    }}>
                    {doa.judul}
                </Text>
            </View>
            <Next />
        </TouchableOpacity>
    );
};

export default CardDoa;
