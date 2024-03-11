import { FETCH_ALL_ASMAUL_HUSNA } from "../actionType/asmaulHusnaType";
import axios from 'axios';

const mainUrl = "https://api.myquran.com/v2"
export const actionSetAsmaulHusna = (payload) => {
    return {
        type: FETCH_ALL_ASMAUL_HUSNA,
        payload,
    };
};


export const fetchAsmaulHusna = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${mainUrl}/husna/semua`);

            console.log(data.data, '<<<<<<<<<<<<<<<<<<< INI ASMAUL HUSNA')
            dispatch(actionSetAsmaulHusna(data.data));
        } catch (error) {
            console.error("Error fetching all Doa:", error);
        }
    };
};
