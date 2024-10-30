import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import partnerImg from "@/assets/images/icons/partner1.png";

const Partners = () => {
    return (
        <section className={`${styles.container}`}>
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>Наши партнёры</h2>


            <Carousel opts={{
                align: "start",
            }}
                className="w-3/6 max-w-90 m-auto my-14"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="-ml-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2">
                            <div className={styles.partnerImg}>
                                <img src={partnerImg} alt="partner logo" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section >
    )
}

export default Partners