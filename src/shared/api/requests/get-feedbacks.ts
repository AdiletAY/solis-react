import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export default async function getFeedbacks() {
	const response = await axiosInstance.get(`${baseURL}/items/feedbacks`);

	if (response.data.data) {
		return response.data.data;
	}

	throw new Error("Feedbacks Not Fount!");
}