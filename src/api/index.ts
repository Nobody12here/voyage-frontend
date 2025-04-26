import { itineraryData } from "../types";
import { axiosInstance } from "./axios";

export const generateIterary = async (data: itineraryData): Promise<any> => {
    const response = await axiosInstance.post("api/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    return response.data;
}