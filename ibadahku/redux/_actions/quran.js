import Axios from 'axios';
import {API} from '../../config/api';
import {
    GET_ALL_QURAN,
    GET_DETAIL_QURAN,
    UPDATE_LAST_QURAN,
} from '../constants/constants';

export const getAllQuran = () => {
    return {
        type: GET_ALL_QURAN,
        payload: async () => {
            const res = await Axios.get(
                'https://api.banghasan.com/quran/format/json/surat',
            );
            return res.data.hasil;
        },
    };
};

export const getDetailQuran = (data) => {
    return {
        type: GET_DETAIL_QURAN,
        payload: async () => {
            const res = await Axios.get(
                `https://api.banghasan.com/quran/format/json/surat/${data.nomor}/ayat/${data.start}-${data.end}`,
            );
            if (res.data.ayat.data) {
                return res.data;
            }
            return null;
        },
    };
};

export const updLastRead = (data) => {
    return {
        type: UPDATE_LAST_QURAN,
        payload: async () => {
            const res = await API.post('user/quran', data);
            return res.data.data;
        },
    };
};
