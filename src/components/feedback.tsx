import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import {useEffect, useState} from "react";
import getFeedbacks from "@/shared/api/requests/get-feedbacks.ts";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {useTranslation} from "react-i18next";

type FeedbackType = {
  id: number;
  fullName: string;
  avatar: string;
  feedback: string;
}

const Feedback = () => {
  const {t} = useTranslation();
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);

  useEffect(() => {
    (async () => {
      const feedbacksRes = await getFeedbacks();
      setFeedbacks(feedbacksRes);
    })()
  }, []);
    return (
        <section className={styles.container} id="feedback">
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>
              {t('pages.home.feedback')}
            </h2>


            <Carousel className="w-full">
                <CarouselContent>
                    {feedbacks?.map((feedback) => (
                        <CarouselItem key={feedback.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className={styles.feedback}>
                                <div className={styles.feedbackText}>
                                  {feedback.feedback}
                                </div>

                                <div className={styles.feedbackPerson}>
                                    <div className={styles.personImg}>
                                        <img src={getStaticImage(feedback.avatar)} alt={feedback.feedback} />
                                    </div>

                                    <p className={styles.personName}>{feedback.fullName}</p>
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