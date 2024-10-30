import styles from '@/styles/styles.module.css';
import mainBackground from '../assets/images/main-background.jpg';
import logo from "../assets/images/logo.svg";

const Hero = () => {
    return (
        <div
            style={{ background: `no-repeat center/cover url(${mainBackground})` }}
        >
            <div className={`${styles.headerBlock} ${styles.container}`}>
                <a className={styles.headerLogo} href="#">
                    <img src={`${logo}`} alt="solis partners logo" />
                </a>

                <nav>
                    <ul data-opened="false" id="navigation" className={styles.navList}>
                        <div id="burger_close">&#9932;</div>
                        <li><a className={styles.navLink} href="#advatages">О нас</a></li>
                        <li><a className={styles.navLink} href="#team">Команда</a></li>
                        <li><a className={styles.navLink} href="#news">Новости</a></li>
                        <li><a className={styles.navLink} href="#services">Услуги</a></li>
                        <li><a className={styles.navLink} href="#feedback">Отзывы</a></li>
                    </ul>
                </nav>
                <div id="burger_btn">
                    &#9776;
                </div>
            </div>

            <div className={`${styles.solis} ${styles.container}`}>
                <h1 className={styles.mainTitle}>• Solis partners •</h1>
                <h2 className={`${styles.subtitle} ${styles.solisSubtitle}`}>Передовые решения</h2>

                <a className={`${styles.button} ${styles.mainButton}`} href="#application">
                    Получить коммерческое предложение
                </a>
            </div>
        </div >
    )
}

export default Hero