import Axios from 'axios';
import {GET_NAMA_SURAT} from '../constants/constants';

export const getNamaSurat = (id_quran) => {
    return {
        type: GET_NAMA_SURAT,
        payload: async () => {
            const res = await Axios.get(
                `https://api.banghasan.com/quran/format/json/surat/${id_quran}`,
            );
            return res.data.hasil[0];
        },
    };
};
