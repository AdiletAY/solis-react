import { API_PATHS } from "@/shared/constants/api-paths";
import axiosInstance from "../axios-instance";
import { NewsType } from "@/components/news";

export default async function getNews(): Promise<NewsType[]> {
    const response = await axiosInstance.get(API_PATHS.NEWS);
    const data: NewsType[] = response.data.data;
    if (data) {
        return data;
    }
    throw new Error("News Not Fount!")
}

