import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel.tsx';

import styles from '@/styles/styles.module.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import getCases from "@/shared/api/requests/get.cases.all.ts";
import {useTranslation} from "react-i18next";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";

export type CaseType = {
  id: number;
  name_kk: string;
  name_ru: string;
  name_en: string;
  photo: string;
  date_created: string;
}

const Cases = () => {
  const {t, i18n} = useTranslation();
  const [cases, setCases] = useState<CaseType[]>([]);
  useEffect(()=>{
    (async()=>{
      const caseRes = await getCases(5);
      setCases(caseRes);
    })();
  },[])
    return (
        <section className={`${styles.casesBlock} ${styles.container}`}>
          <h2 className={styles.title}>{t('pages.home.cases')}</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {cases?.map((caseItem) => (
                  <CarouselItem key={caseItem.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className={styles.caseCard}>
                        <Link to={`/cases/${caseItem.id}`} className={styles.caseCardLink}/>
                        <div className={styles.caseInfo}>
                          <span> {new Date(caseItem.date_created).toLocaleDateString()} </span>

                          <p className={styles.caseText}>
                            {//@ts-ignore
                              caseItem[`name_${i18n.language}`]
                            }
                          </p>
                          <span className={styles.caseInfoBg}/>
                        </div>
                        <div className={styles.casePartnerImg}>
                          <img
                              src={getStaticImage(caseItem.photo)}
                              alt={//@ts-ignore
                                caseItem[`name_${i18n.language}`]
                              }
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>

          <div className='mt-7 w-full flex justify-center items-center'>
            <Link to='/cases' className='text-xl hover:underline'>{t('pages.home.allCases')}</Link>
          </div>

        </section>
    );
};

export default Cases;
