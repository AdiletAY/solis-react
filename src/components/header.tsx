import { useTranslation } from "react-i18next";
import LanguageSelector from "./ui/language-selector.tsx";

import styles from '@/styles/styles.module.css';

const Header = () => {

    const { t } = useTranslation();
    return (
        <header className={styles.header}>
            <div className={styles.contactsBlock}>
                <div className={`${styles.contacts} ${styles.container}`}>
                    <div className={styles.PhoneBlock}>
                        <span>{t('Astana')}</span>
                        <a className={styles.phoneNumber} href="tel:+77084253033"> +7 (708) 425-30-33</a>
                    </div>
                    <div className={styles.PhoneBlock}>
                        <span>{t('Almaty')}</span>
                        <a className={styles.phoneNumber} href="tel:+77084253033"> +7 (708) 425-30-33</a>
                    </div>

                    <a className={`${styles.button} ${styles.headerApplicationButton}`} href="#application">
                        {t('Leave a request')}
                    </a>

                    <LanguageSelector />
                </div>
            </div>
        </header >
    );
};

export default Header;
