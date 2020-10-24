import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';
import {API, setAuthToken} from '../../config/api';
import {LOGIN, LOGOUT, REGISTER} from '../constants/constants';

export const login = (data) => {
    return {
        type: LOGIN,
        payload: async () => {
            const res = await API.post('/auth/login', data).catch((err) => {
                ToastAndroid.show(
                    'Username atau Password salah',
                    ToastAndroid.CENTER,
                );
                return Promise.reject(err);
            });
            if (res.data.code == 0) {
                ToastAndroid.show('Login Success', ToastAndroid.CENTER);
                await AsyncStorage.setItem('token', res.data.data.token);
                await AsyncStorage.setItem(
                    'username',
                    res.data.data.user.username,
                );
                await AsyncStorage.setItem(
                    'id',
                    res.data.data.user.id.toString(),
                );
                const ress = {
                    authenticated: true,
                    user: res.data.data,
                };
                return ress;
            }
        },
    };
};

export const register = (data) => {
    return {
        type: REGISTER,
        payload: async () => {
            const res = await API.post('/auth/register', data).catch((err) => {
                ToastAndroid.show('Daftar Gagal', ToastAndroid.CENTER);
                return Promise.reject(err);
            });

            if (res.data.code == 0) {
                ToastAndroid.show('Daftar Berhasil', ToastAndroid.CENTER);
                await AsyncStorage.setItem('token', res.data.data.token);
                await AsyncStorage.setItem(
                    'username',
                    res.data.data.user.username,
                );
                await AsyncStorage.setItem(
                    'id',
                    res.data.data.user.id.toString(),
                );
                const ress = {
                    authenticated: true,
                    user: res.data.data,
                };
                return ress;
            }
        },
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
        payload: async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                setAuthToken(token);
            }
            const res = await API.post('user/logout').catch((err) => {
                return {
                    data: {
                        code: err.response.status,
                    },
                };
            });

            if (res.data.code == 0 && res != undefined) {
                AsyncStorage.clear();
                const ress = {
                    authenticated: false,
                    user: null,
                };
                return ress;
            }
            ToastAndroid.show('Logout Gagal', ToastAndroid.CENTER);
        },
    };
};
