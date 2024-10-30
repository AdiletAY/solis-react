import { API_PATHS } from "@/shared/constants/api-paths";
import axiosInstance from "../axios-instance";


export default async function getNewsById(id: number) {
    return await axiosInstance.get(API_PATHS.NEWS_ITEM(id));
}