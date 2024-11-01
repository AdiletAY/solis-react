import axiosInstance, {baseURL} from "@/shared/api/axios-instance.ts";
import {teamArrayFilter} from "@/lib/helpers/team-array-filter.ts";


export default async function getTeam(){
	const response = await axiosInstance.get(`${baseURL}/items/teams?fields=*.*`);
	if (response.data.data) {
		return teamArrayFilter(response.data.data);
	}
	throw new Error("Team Not Fount!");
}