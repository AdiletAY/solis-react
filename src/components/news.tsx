import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { useEffect, useState } from "react"
import getNews from "@/shared/api/requests/get.news.all"
import { getStaticImage } from '@/lib/helpers/get-static-img';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

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
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: NewsType[] = await getNews(5);
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
            <h2 className={styles.title}>{t('pages.home.news')}</h2>


            <Carousel className="w-full m-auto">
                <CarouselContent>
                    {news?.map((newsItem) => (
                        <CarouselItem key={newsItem.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className={`${styles.caseCard} h-full`}>
                                <Link to={`/news/${newsItem.id}`} className={styles.caseCardLink} />
                                <div className={styles.caseInfo}>
                                    <span>{new Date(newsItem.date_created).toLocaleDateString()}</span>

                                    <p className={styles.caseText}>
                                        {//@ts-ignore
                                            newsItem[`title_${i18n.language}`]
                                        }
                                    </p>
                                    <span className={styles.caseInfoBg} />
                                </div>

                                <div className={styles.casePartnerImg} >
                                    <img src={getStaticImage(newsItem.photo)} alt="partner logo" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className='mt-7 w-full flex justify-center items-center'>
                <Link to='/news' className='text-xl hover:underline'>{t('pages.home.allNews')}</Link>
            </div>

        </section>
    )
}


export default News