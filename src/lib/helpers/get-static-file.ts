import {baseURL} from "@/shared/api/axios-instance.ts";

export function getStaticFile(id: string) {
	if (!id) return '';

	return `${baseURL}/assets/${id}`
}