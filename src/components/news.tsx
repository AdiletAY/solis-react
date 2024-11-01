import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { useEffect, useState } from "react"
import getNews from "@/shared/api/requests/get.news.all"
import { getStaticImage } from '@/lib/helpers/get-static-img';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export type NewsType = {
    id: number;
    title_kk: string;
    title_ru: string;
    title_en: string;
    description_kk: string;
    description_ru: string;
    description_en: string;
    photo: string;
    date_created: string;
}

const News = () => {
    const [news, setNews] = useState<NewsType[]>([]);

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: NewsType[] = await getNews();
                setNews(data);


            } catch (error) {
                console.error('Error fetching cases:', error);
            }
        };

        fetchData();
    }, [])

    if (!news.length) return null;
    return (
        <section className={styles.container} id="news">
            <h2 className={styles.title}>Новости</h2>


            <Carousel className="w-full m-auto">
                <CarouselContent>
                    {news?.map(({ id, title_kk, photo }) => (
                        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                            <div className={styles.caseCard}>
                                <Link to={`/news/${id}`} className={styles.caseCardLink} />
                                <div className={styles.caseInfo}>
                                    <span> 02.03.2024 </span>

                                    <p className={styles.caseText}>
                                        {title_kk}
                                    </p>
                                    <span className={styles.caseInfoBg} />
                                </div>

                                <div className={styles.casePartnerImg} >
                                    <img src={getStaticImage(photo)} alt="partner logo" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </section>
    )
}


export default News