import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getServices() {
	const response = await axiosInstance.get(`${baseURL}/items/services`);
	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Services Not Fount!");
}