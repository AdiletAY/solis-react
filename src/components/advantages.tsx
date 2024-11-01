import styles from '@/styles/styles.module.css';
import {useEffect, useState} from "react";
import getAdvantages from "@/shared/api/requests/get-advantages.ts";
import {useTranslation} from "react-i18next";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";

type AdvantageType = {
    id: number;
  title_en: string;
  title_ru: string;
  title_kk: string;
  description: string;
  icon: string;
}

const Advantages = () => {
    const {t, i18n} = useTranslation();
    const [advantages, setAdvantages] = useState<AdvantageType[]>([]);
    useEffect(() => {
        (async () => {
          const advantagesRes = await getAdvantages();
            setAdvantages(advantagesRes)
        })()
    }, []);
    return (
        <section className={styles.container} id="advatages">
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>
              {t('pages.home.advantages')}
            </h2>

            <div className={styles.advantages}>
                {
                    advantages?.map((advantage) => (
                        <div key={advantage.id} className={styles.advantage}>
                            <div className={styles.advantageIcon}>
                                <img src={getStaticImage(advantage.icon)}
                                     alt={//@ts-ignore
                                         advantage[`title_${i18n.language}`]
                                     }
                                />
                            </div>

                            <h4 className={styles.advantageText}>
                                {//@ts-ignore
                                    advantage[`title_${i18n.language}`]
                                }
                            </h4>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Advantages