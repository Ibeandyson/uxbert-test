import { baseUrl } from "../utils/Url";
import Axios from "axios";
import { useState } from "react";

const useGetSingleData = () => {
  const [state, setSate] = useState([]);
  const getSingleData = async (id: string): Promise<any> => {
    try {
      const res = await Axios.get(`${baseUrl}/${id}`, {
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
    getSingleData,
  };
};

export default useGetSingleData;
