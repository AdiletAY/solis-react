import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import {useEffect, useState} from "react";
import getServices from "@/shared/api/requests/get-services.ts";
import {useTranslation} from "react-i18next";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {Link, useNavigate} from "react-router-dom";


export type ServiceType = {
  id: number;
  name_kk: string;
  name_ru: string;
  name_en: string;
  photo: string;
}

const Service = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState<ServiceType[]>([]);

  const handleRedirect = (id: number | string) => {
    navigate(`/services/${id}`)
  };

  useEffect(() => {
    (async () => {
      const servicesRes = await getServices(5);
      setServices(servicesRes);
    })();
  }, []);
    return (
        <section className={styles.container} id="services">
          <h2 className={`${styles.title}`}>{t('pages.home.services')}</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {services?.map((service) => (
                  <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">

                    <div onClick={() => handleRedirect(service.id)} className={styles.imageGallery}>
                      <figure className={styles.imageCard}>
                        <img src={getStaticImage(service.photo)}
                             alt={//@ts-ignore
                               service[`name_${i18n.language}`]
                             }
                        />
                        <figcaption className={styles.imageCaption}>
                          {//@ts-ignore
                            service[`name_${i18n.language}`]
                          }
                        </figcaption>
                      </figure>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>

          <div className='mt-7 w-full flex justify-center items-center'>
            <Link to='/services' className='text-xl hover:underline'>{t('pages.home.allServices')}</Link>
          </div>

        </section>
    )
}

export default Service