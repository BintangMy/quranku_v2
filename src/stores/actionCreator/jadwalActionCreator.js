import { FETCH_ALL_CITY, FETCH_SCHEDULE, FETCH_HIJRIAH_DATE } from "../actionType/jadwalSholatType";
import axios from "axios";

const cityUrl = "https://api.myquran.com/v2";
export const actionGetHijriahDate = (payload) => {
  return {
    type: FETCH_HIJRIAH_DATE,
    payload,
  };
}; 

export const actionSetCity = (payload) => {
  return {
    type: FETCH_ALL_CITY,
    payload,
  };
};

export const actionSetOneCity = (payload) => {
  return {
    type: FETCH_SCHEDULE,
    payload,
  };
};

export const fetcGetHijriahDate = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${cityUrl}/cal/hijr/?adj=-1`);
      console.log(data.data, '<<<<<<<<<<<<<<< fetcGetHijriahDate')
      dispatch(actionGetHijriahDate(data));
    } catch (error) {
      console.log("Error fetching all Doa:", error);
    }
  };
};

export const fetchCity = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${cityUrl}/sholat/kota/semua`);
      // console.log(data, '<<<<<<<<<<<<<<< ALL CITY')
      dispatch(actionSetCity(data.data));
    } catch (error) {
      console.log("Error fetching all Doa:", error);
    }
  };
};

export const fetchOneCity = (dataCity) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  console.log(formattedDate, '<<<<<<<<<<<<<<<<< formattedDate')
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${cityUrl}/sholat/jadwal/${dataCity.cityCode}/${formattedDate}`
      );
      // console.log(data.data.jadwal, '<<<<<<<<<<<<<<< fetchOneCity')
      dispatch(actionSetOneCity(data.data.jadwal));
    } catch (error) {
      console.log("Error fetching all Jadwal:", error);
    }
  };
};
