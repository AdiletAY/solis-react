import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";

export type ApplicationsBodyType = {
	email: string
	phone: string
	fullName:	string
}

export default async function postApplications(body:ApplicationsBodyType){
	const response = await axiosInstance.post(`${baseURL}/items/applications`, body);

	if (response.status > 199 && response.status < 300) {
		return 'OK';
	}

	throw new Error("Applications Not Fount!");
}