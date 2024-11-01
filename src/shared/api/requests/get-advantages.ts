import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getAdvantages() {
	const response = await axiosInstance.get(`${baseURL}/items/advantages`);
	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Advantages Not Fount!");
}