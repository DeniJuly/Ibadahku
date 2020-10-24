import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {API, setAuthToken} from '../../config/api';
import {
    EDIT_PROFILE,
    GET_ALL_KOTA,
    GET_CITY_NAME,
    USER_DETAIL,
} from '../constants/constants';

export const getDetailUser = () => {
    return {
        type: USER_DETAIL,
        payload: async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                setAuthToken(token);
            }
            const res = await API.get('user/detail');
            return res.data.data;
        },
    };
};

export const getCityName = (city_code) => {
    return {
        type: GET_CITY_NAME,
        payload: async () => {
            const res = await Axios.get(
                `https://api.banghasan.com/sholat/format/json/kota/kode/${city_code}`,
            );
            return res.data.kota;
        },
    };
};

export const getAllCity = () => {
    return {
        type: GET_ALL_KOTA,
        payload: async () => {
            const res = await Axios.get(
                'https://api.banghasan.com/sholat/format/json/kota',
            );
            return res.data.kota;
        },
    };
};

export const editProfile = (data) => {
    return {
        type: EDIT_PROFILE,
        payload: async () => {
            const res = await API.post('user/profile/edit', data);
            return res.data.data;
        },
    };
};
