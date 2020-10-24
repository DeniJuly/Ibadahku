import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {API, setAuthToken} from '../../config/api';
import {GET_CITY_NAME, USER_DETAIL} from '../constants/constants';

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
