import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getPartners(){
	const response = await axiosInstance.get(`${baseURL}/items/partners`);
	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Partners Not Fount!");
}