import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export async function getBranches() {
	const response = await axiosInstance.get(`${baseURL}/items/branches `);
	if (response.data.data){
		return response.data.data;
	}

	throw new Error("Branches Not Fount!");
}