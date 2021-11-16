import { baseUrl } from "../utils/Url";
import Axios from "axios";
import { useState } from "react";

const useGetAllData = () => {
  const [state, setSate] = useState([]);
  const getAllData = async (): Promise<any> => {
    try {
      const res = await Axios.get(`${baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setSate(res.data);
    } catch (err) {
      console.log(err)
    }
  };
  return {
    sendingData: state,
    getAllData,
  };
};

export default useGetAllData;
