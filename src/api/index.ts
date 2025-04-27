import { axiosInstance } from "./axios";
import { ItienraryResponse, itineraryData } from "../types";
export const generateIterary = async (data: itineraryData): Promise<ItienraryResponse> => {
  const response = await axiosInstance.post("api/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
