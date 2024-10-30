import styles from '@/styles/styles.module.css';

const Application = () => {
    return (
        <section className={`${styles.fullwidth} ${styles.applicationBlockFull}`} id="application">
            <div className={`${styles.applicationBlock} ${styles.container}`}>
                <h2 className={`${styles.title} ${styles.titleUnderline}`}>Получите прямо сейчас</h2>
                <h3 className={styles.applicationSubtitle}>коммерческое предложение</h3>

                <form className={styles.applicationForm} action="">
                    <input className={styles.formInput} type="text" placeholder="Имя Фамилия" />
                    <input className={styles.formInput} type="tel" placeholder="Мобильный телефон" />
                    <input className={styles.formInput} type="email" placeholder="Эл. почта" />

                    <div className={styles.buttonBlock}>
                        <p className={styles.applicationDescription}>
                            Нажимая кнопку "Получить" Вы предоставляете согласие на сбор и
                            обработку данных.
                        </p>
                        <button className={`${styles.button} ${styles.applicationButton}`} type="submit">
                            Получить
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Application