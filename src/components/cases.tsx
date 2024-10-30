import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel.tsx';

import styles from '@/styles/styles.module.css';

const Cases = () => {
    return (
        <section className={`${styles.casesBlock} ${styles.container}`}>
            <h2 className={styles.title}>Кейсы</h2>
            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <div className={styles.caseCard}>
                                    <div className={styles.caseInfo}>
                                        <span> 02.03.2024 </span>

                                        <p className={styles.caseText}>
                                            Кейс победит Транс. Вопрос взыскания задолженности
                                        </p>
                                    </div>
                                    <div className={styles.casePartnerImg}>
                                        <img src="{mainBackground}" alt="partner logo" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Cases;
