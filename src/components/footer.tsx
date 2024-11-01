import footerBackground from "../assets/images/footer-bg.jpg";

import styles from '@/styles/styles.module.css';
import {useEffect, useState} from "react";
import getPageParams from "@/shared/api/requests/get-page-params.ts";
import i18n from "i18next";
import getAddress from "@/shared/api/requests/get-address.ts";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Logotype from "@/components/ui/logotype.tsx";


type FooterParams = {
  footer_title_en: string
  footer_title_ru: string
  footer_title_kk: string
  footer_description_en: string
  footer_description_ru: string
  footer_description_kk: string
  footer_phone: string
  footer_email: string
} | null

type AddressType = {
    address: string;
    branch: number;
    id: number;
    link: string;
}



const Footer = () => {
    const {t} = useTranslation();
    const [footerParams, setFooterParams] = useState<FooterParams>(null);
    const [addresses, setAddresses] = useState<AddressType[]>([]);

    useEffect(() => {
        (async () => {
          const footerRes = await getPageParams();
          setFooterParams(footerRes)
        })();

        (async () => {
            const addressesRes = await getAddress();
            setAddresses(addressesRes)
        })();
    }, []);

    if (!footerParams) return null

    return (
        <div style={{ background: `no-repeat center/cover url(${footerBackground})` }}>
            <footer className={`${styles.footer} ${styles.container}`}>
                <div className={styles.footerTop}>
                    <div className={styles.footerLeft}>
                        <a className={styles.footerLogo} href="#">
                            <Logotype/>
                        </a>

                        <h3>
                            {//@ts-ignore
                                footerParams[`footer_title_${i18n.language}`]
                            }
                            <br />
                            {//@ts-ignore
                                footerParams[`footer_description_${i18n.language}`]
                            }
                        </h3>
                    </div>

                    <div className={styles.footerRight}>
                        <div >
                            <h4 className={styles.footerTitle}>
                                {t('footer.navigation.title')}
                            </h4>

                            <ul>
                                <li>
                                    <Link to="/#advatages">
                                        {t('footer.navigation.aboutUs')}
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/#team">
                                        {t('footer.navigation.team')}
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/#news">
                                        {t('footer.navigation.news')}
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/#services">
                                        {t('footer.navigation.services')}
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/#feedback">
                                        {t('footer.navigation.testimonials')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerDocs}>
                            <h4 className={styles.footerTitle}>
                                {t('footer.documents.title')}
                            </h4>

                            <ul className={styles.footerList}>
                                <li><a href="#">{t('footer.documents.documents_templates')}</a></li>
                                <li>
                                    <a href="#">{t('footer.documents.notice')}</a>
                                </li>
                            </ul>
                        </div>

                        <div >
                            <h4 className={styles.footerTitle}>{t('footer.contacts.title')}</h4>

                            <ul className={styles.footerList}>
                                <li>
                                    <a href={`tel:${footerParams?.footer_phone}`}>{footerParams?.footer_phone}</a>
                                </li>
                                <li>
                                    <a href={`mailto:${footerParams?.footer_email}`}>{footerParams?.footer_email}</a>
                                </li>
                                <li>
                                    {addresses?.map((address) => (
                                        <div key={address.id}>
                                            <Link to={address.link} target="_blank">
                                                {address.address}
                                            </Link>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.underfooter}>
                    <span className={styles.textUnderline}>
                        {//@ts-ignore
                            footerParams[`footer_title_${i18n.language}`]
                        }
                    </span> &copy; {new Date().getFullYear()}. <br />
                    {t('footer.allRights')}
                </div>
            </footer >
        </div >
    )
}

export default Footer