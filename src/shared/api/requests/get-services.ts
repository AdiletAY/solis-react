import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getServices(limit: number = 0) {
	const response = await axiosInstance.get(`${baseURL}/items/services${limit?`?sort[]=-date_created&limit=${limit}`: ''}`);
	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Services Not Fount!");
}