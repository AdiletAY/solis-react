import { API_PATHS } from "@/shared/constants/api-paths";
import axiosInstance from "../axios-instance";

export default async function getNews() {
    return await axiosInstance.get(API_PATHS.NEWS);
}