import Axios from 'axios';
import {API} from '../../config/api';
import {GET_JADWAL_IBADAH} from '../constants/constants';

export const getIbadah = (kota, tanggal) => {
    return {
        type: GET_JADWAL_IBADAH,
        payload: async () => {
            const res = await Axios.get(
                `https://api.banghasan.com/sholat/format/json/jadwal/kota/${kota}/tanggal/${tanggal}`,
            );
            return res.data.jadwal.data;
        },
    };
};
