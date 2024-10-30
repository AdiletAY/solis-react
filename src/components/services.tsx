
import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import serviceBackgroundImage from "@/assets/images/service-img.png";

const Service = () => {
    return (
        <section className={styles.container} id="services">
            <h2 className={`${styles.title}`}>Услуги</h2>
            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">

                            <div className={styles.imageGallery}>
                                <figure className={styles.imageCard}>
                                    <img src={serviceBackgroundImage} alt="services" />
                                    <figcaption className={styles.imageCaption}>Проверка рекламных материалов</figcaption>
                                </figure>
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

export default Service