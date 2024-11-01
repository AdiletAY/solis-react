import styles from '@/styles/styles.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import {useEffect, useState} from "react";
import getPartners from "@/shared/api/requests/get-partners.ts";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {useTranslation} from "react-i18next";

type PartnersType = {
  id: number;
  logo: string;
  url: string;
  company: string;
}

const Partners = () => {
  const {t} = useTranslation();
  const [partners, setPartners] = useState<PartnersType[]>([]);

  const openPartnerLink = (url: string) => {
    window.open(url, '_blank');
  }

  useEffect(() => {
    (async () => {
      const partnersRes = await getPartners();
      setPartners(partnersRes);
    })()
  }, []);
    return (
        <section className={`${styles.container}`}>
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>
              {t('pages.home.ourPartners')}
            </h2>


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
                    {partners?.map((partner) => (
                        <CarouselItem key={partner.id} className="basis-1/2 cursor-pointer">
                            <div onClick={()=>openPartnerLink(partner.url)} className={styles.partnerImg}>
                                <img src={getStaticImage(partner.logo)} alt={partner.company} />
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