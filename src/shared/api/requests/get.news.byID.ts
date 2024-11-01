import axiosInstance, {baseURL} from "../axios-instance";


export default async function getNewsById(id: number | string | undefined) {
    if (!id) return
    const response = await axiosInstance.get(`${baseURL}/items/news/${id}`);

    if (response.data.data) {
        return response.data.data;
    }
    throw new Error("News Not Fount!");
}