import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getPageParams(){
	const response = await axiosInstance.get(`${baseURL}/items/pageParams`);

	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Page Not Fount!");
}