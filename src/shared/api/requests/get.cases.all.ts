import axiosInstance, {baseURL} from "../axios-instance";

export default async function getCases() {
    const response = await axiosInstance.get(`${baseURL}/items/cases`);
    if (response.data.data){
        return response.data.data;
    }

    throw new Error("Branches Not Fount!");
}