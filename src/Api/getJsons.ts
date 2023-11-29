import { axiosClient } from "./axiosClient";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "./queryKeys";

export const getAllData = async () => {
  let res = await axiosClient.get("/root");
  return res.data;
};

export const useGetAll = () => useQuery(QUERY_KEYS.MAIN_KEY, getAllData);
