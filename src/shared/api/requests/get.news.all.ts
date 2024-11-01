import axiosInstance, {baseURL} from "../axios-instance";
import { NewsType } from "@/components/news";

export default async function getNews(limit: number = 0): Promise<NewsType[]> {
    const response = await axiosInstance.get(`${baseURL}/items/news${limit?`?sort[]=-date_created&limit=${limit}`: ''}`);
    const data: NewsType[] = response.data.data;
    if (data) {
        return data;
    }
    throw new Error("News Not Fount!")
}

