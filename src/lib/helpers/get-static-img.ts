const baseURL = import.meta.env.VITE_API_URL;

export function getStaticImage(photoID: string): string {
    if (!photoID) return ""
    if (photoID.includes("http://") || photoID.includes("https://")) return photoID
    return `${baseURL}/assets/${photoID}`
}