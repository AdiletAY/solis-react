import footerBackground from "../assets/images/footer-bg.jpg";

import styles from '@/styles/styles.module.css';
import logo from "../assets/images/logo.svg";

const Footer = () => {
    return (
        <div style={{ background: `no-repeat center/cover url(${footerBackground})` }}>
            <footer className={`${styles.footer} ${styles.container}`}>
                <div className={styles.footerTop}>
                    <div className={styles.footerLeft}>
                        <a className={styles.footerLogo} href="#">
                            <img src={logo} alt="company logo" />
                        </a>

                        <h3>
                            SOLIS Law Firm <br />
                            это надежный партнер по юридическим вопросам
                        </h3>
                    </div>

                    <div className={styles.footerRight}>
                        <div >
                            <h4 className={styles.footerTitle}>Навигация</h4>

                            <ul>
                                <li>
                                    <a href="#advatages">О нас</a>
                                </li>
                                <li >
                                    <a href="#team">Команда</a>
                                </li>
                                <li >
                                    <a href="#news">Новости</a>
                                </li>
                                <li >
                                    <a href="#services">Услуги</a>
                                </li>
                                <li >
                                    <a href="#feedback">Отзывы</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerDocs}>
                            <h4 className={styles.footerTitle}>Документы</h4>

                            <ul className={styles.footerList}>
                                <li><a href="#">Шаблоны документов</a></li>
                                <li>
                                    <a href="#">Заявление об ограничении ответственности</a>
                                </li>
                            </ul>
                        </div>

                        <div >
                            <h4 className={styles.footerTitle}>Контакты</h4>

                            <ul className={styles.footerList}>
                                <li>
                                    <a href="tel:+77771548288">+7(777)154-82-88</a>
                                </li>
                                <li>
                                    <a href="mailto:info@solislaw.com">info@solislaw.com</a>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://go.2gis.com/4ziq9" target="_blank">
                                            01000, г. Астана, ул. Туран 18, офис 23
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://go.2gis.com/4ziq9" target="_blank">
                                            01000, г. Алматы, ул. Туран 18, офис 23
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.underfooter}>
                    <span className={styles.textUnderline}>SOLIS Law Firm</span> © 2024. <br />
                    Все права защищены либо будут защищены
                </div>
            </footer >
        </div >
    )
}

export default Footer