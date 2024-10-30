import styles from '@/styles/styles.module.css';

import agreementIcon from "@/assets/images/icons/agreement.png";
import growthIcon from "@/assets/images/icons/growth.png";
import shieldIcon from "@/assets/images/icons/shield.png";


const Advantages = () => {
    return (
        <section className={styles.container} id="advatages">
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>Преимущества</h2>

            <div className={styles.advantages}>
                <div className={styles.advantage}>
                    <div className={styles.advantageIcon}>
                        <img src={agreementIcon} alt="agreementIcon" />
                    </div>

                    <h4 className={styles.advantageText}>
                        Высокий уровень обслуживания и оперативное реагирование
                    </h4>
                </div>

                <div className={styles.advantage}>
                    <div className={styles.advantageIcon}>
                        <img src={growthIcon} alt="growthIcon" />
                    </div>

                    <h4 className={styles.advantageText}>
                        Достижение запланированных результатов
                    </h4>
                </div>

                <div className={styles.advantage}>
                    <div className={styles.advantageIcon}>
                        <img src={shieldIcon} alt="shieldIcon" />
                    </div>

                    <h4 className={styles.advantageText}>
                        Высокий уровень обслуживания и оперативное реагирование
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Advantages