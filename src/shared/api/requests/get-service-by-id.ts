import axiosInstance, {baseURL} from "../axios-instance";


export default async function getServiceById(id: number | string | undefined) {
	if (!id) return
	const response = await axiosInstance.get(`${baseURL}/items/services/${id}`);

	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("News Not Fount!");
}