import { API_PATHS } from "@/shared/constants/api-paths";
import axiosInstance from "../axios-instance";

export default async function getCases() {
    return await axiosInstance.get(API_PATHS.CASES);
}