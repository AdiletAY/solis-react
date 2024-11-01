import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getAddress() {
	const response = await axiosInstance.get(`${baseURL}/items/address`);
	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Address Not Fount!");
}