import axiosInstance, {baseURL} from "../axios-instance";

export default async function getCases(limit: number = 0) {
    const response = await axiosInstance.get(`${baseURL}/items/cases${limit?`?sort[]=-date_created&limit=${limit}`: ''}`);
    if (response.data.data){
        return response.data.data;
    }

    throw new Error("Branches Not Fount!");
}