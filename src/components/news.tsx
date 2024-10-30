import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { useEffect, useState } from "react"
import getNews from "@/shared/api/requests/get.news.all"

const News = () => {
    const [news, setNews] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNews();
                setNews(response.data.data);

            } catch (error) {
                console.error('Error fetching cases:', error);
            }
        };

        fetchData();
    }, [])


    return (
        <section className={styles.container} id="news">
            <h2 className={styles.title}>Новости</h2>


            <Carousel className="w-full m-auto">
                <CarouselContent>
                    {news.map(({ id, title }) => (
                        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                            <div className={styles.caseCard}>
                                <div className={styles.caseInfo}>
                                    <span> 02.03.2024 </span>

                                    <p className={styles.caseText}>
                                        {title}
                                    </p>
                                </div>

                                <div className={styles.casePartnerImg}>
                                    <img src="./assets/img/partner-logo.svg" alt="partner logo" />
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