import styles from '@/styles/styles.module.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTranslation } from 'react-i18next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import teamateImg from "@/assets/images/teammate-img.png"

const Team = () => {
    const { t } = useTranslation();

    return (
        <section className={`${styles.teamBlock} ${styles.container}`} id="team">
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>Наша команда</h2>

            <Tabs defaultValue="astana" className="w-full flex flex-col justify-center">
                <TabsList className="grid w-1/3 h-auto grid-cols-2 m-auto rounded">
                    <TabsTrigger className='rounded p-3 text-base uppercase font-semibold' value="astana">{t('Astana')}</TabsTrigger>
                    <TabsTrigger className='rounded p-3 text-base uppercase font-semibold' value="almaty">{t('Almaty')}</TabsTrigger>
                </TabsList>
                <TabsContent value="astana">
                    <Carousel className="w-9/12 m-auto">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div>
                                        <img src={teamateImg} alt="photo" />

                                        <div className={styles.teammateInfo}>
                                            <h4 className={styles.teammateName}>Чингис Оралбаев</h4>
                                            <h5 className={styles.teammatePosition}>Старший Юрист</h5>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </TabsContent>
                <TabsContent value="almaty">
                    <Carousel className="w-9/12 m-auto">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div>
                                        <img src={teamateImg} alt="photo" />

                                        <div className={styles.teammateInfo}>
                                            <h4 className={styles.teammateName}>Чингис Оралбаев Almaty</h4>
                                            <h5 className={styles.teammatePosition}>Старший Юрист</h5>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </TabsContent>
            </Tabs>
        </section >
    )
}

export default Team