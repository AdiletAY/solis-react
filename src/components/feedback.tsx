import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import feedbackImg from "@/assets/images/feedback-avatar1.png";

const Feedback = () => {
    return (
        <section className={styles.container} id="feedback">
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>Отзывы</h2>


            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className={styles.feedback}>
                                <div className={styles.feedbackText}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                                    optio explicabo doloribus nulla aliquid autem sunt eligendi!
                                    Accusamus, molestiae officiis!
                                </div>

                                <div className={styles.feedbackPerson}>
                                    <div className={styles.personImg}>
                                        <img src={feedbackImg} alt="feedbackImg" />
                                    </div>

                                    <p className={styles.personName}>Johnny Doe</p>
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

export default Feedback