import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getDocuments() {
	const response = await axiosInstance.get(`${baseURL}/items/documents`);
	if (response.data.data) {
		return response.data.data;
	}
	throw new Error("Documents Not Fount!");
}