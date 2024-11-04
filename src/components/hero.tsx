import styles from '@/styles/styles.module.css';
import mainBackground from '../assets/images/main-background.jpg';
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Logotype from "@/components/ui/logotype.tsx";
import {Link} from "react-router-dom";

const Hero = () => {
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(p => !p);
    }
    return (
        <div
            style={{ background: `no-repeat center/cover url(${mainBackground})` }}
        >
            <div className={`${styles.headerBlock} ${styles.container}`}>
                <a className={styles.headerLogo} href="#">
                    <Logotype/>
                </a>

                <nav>
                    <ul className={`${styles.navList} ${isMenuOpen && styles.opened}`}>
                        <div onClick={toggleMenu} className={styles.burgerClose}>&#9932;</div>
                        <li><Link className={styles.navLink} onClick={toggleMenu} target='_top' to="#advatages">{t('navigation.aboutUs')}</Link></li>
                        <li><Link className={styles.navLink} onClick={toggleMenu} target='_top' to="#team">{t('navigation.team')}</Link></li>
                        <li><Link className={styles.navLink} onClick={toggleMenu} target='_top' to="#news">{t('navigation.news')}</Link></li>
                        <li><Link className={styles.navLink} onClick={toggleMenu} target='_top' to="#services">{t('navigation.services')}</Link></li>
                        <li><Link className={styles.navLink} onClick={toggleMenu} target='_top' to="#feedback">{t('navigation.testimonials')}</Link></li>
                    </ul>
                </nav>
                <div onClick={toggleMenu} className={styles.burgerBtn}>
                    &#9776;
                </div>
            </div>

            <div className={`${styles.solis} ${styles.container}`}>
                <h1 className={styles.mainTitle}>• Solis partners •</h1>
                <h2 className={`${styles.subtitle} ${styles.solisSubtitle}`}>
                    {t('hero.subtitle')}
                </h2>

                <a className={`${styles.button} ${styles.mainButton}`} href="https://wa.me/77771548288?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8.%20">
                    {t('hero.getApplication')}
                </a>
            </div>
        </div >
    )
}

export default Hero