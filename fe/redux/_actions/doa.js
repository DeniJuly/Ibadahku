import {API} from '../../config/api';
import {
    GET_ALL_DOA,
    GET_DETAIL_DOA,
    GET_DOA_LIMIT,
} from '../constants/constants';

export const getAllDoa = () => {
    return {
        type: GET_ALL_DOA,
        payload: async () => {
            const res = await API.get('/doa/list');
            return res.data.data;
        },
    };
};

export const getLimitDoa = (limit) => {
    return {
        type: GET_DOA_LIMIT,
        payload: async () => {
            const res = await API.get(`/doa/list/${limit}`);
            return res.data.data;
        },
    };
};

export const getDetailDoa = (id) => {
    return {
        type: GET_DETAIL_DOA,
        payload: async () => {
            const res = await API.get(`/doa/detail/${id}`);
            return res.data.data;
        },
    };
};
