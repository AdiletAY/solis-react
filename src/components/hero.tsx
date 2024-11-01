import styles from '@/styles/styles.module.css';
import mainBackground from '../assets/images/main-background.jpg';
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Logotype from "@/components/ui/logotype.tsx";

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
                        <li><a className={styles.navLink} href="#advatages">{t('navigation.aboutUs')}</a></li>
                        <li><a className={styles.navLink} href="#team">{t('navigation.team')}</a></li>
                        <li><a className={styles.navLink} href="#news">{t('navigation.news')}</a></li>
                        <li><a className={styles.navLink} href="#services">{t('navigation.services')}</a></li>
                        <li><a className={styles.navLink} href="#feedback">{t('navigation.testimonials')}</a></li>
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

                <a className={`${styles.button} ${styles.mainButton}`} href="#application">
                    {t('hero.getApplication')}
                </a>
            </div>
        </div >
    )
}

export default Hero