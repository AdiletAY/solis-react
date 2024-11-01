import styles from '@/styles/styles.module.css';
import {useState} from "react";
import postApplications, {ApplicationsBodyType} from "@/shared/api/requests/post-applications.ts";
import {toast} from "sonner";
import {useTranslation} from "react-i18next";

const Application = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState<ApplicationsBodyType>({
        fullName: '',
        phone: '',
        email: ''
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await postApplications(formData);

        if (response){
            toast.success(t('common.toasts.application_send_success'));
        } else {
            toast.error(t('common.toasts.application_send_error'));
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <section className={`${styles.fullwidth} ${styles.applicationBlockFull}`} id="application">
            <div className={`${styles.applicationBlock} ${styles.container}`}>
                <h2 className={`${styles.title} ${styles.titleUnderline}`}>
                    {t('forms.application.title')}
                </h2>
                <h3 className={styles.applicationSubtitle}>
                    {t('forms.application.subtitle')}
                </h3>

                <form className={styles.applicationForm} onSubmit={handleSubmit}>
                    <input required value={formData.fullName} name='fullName' onChange={handleChange} className={styles.formInput} type="text" placeholder={t('forms.application.fullName')} />
                    <input required value={formData.phone} name='phone' onChange={handleChange} className={styles.formInput} type="tel" placeholder={t('forms.application.phone')} />
                    <input required value={formData.email} name='email' onChange={handleChange} className={styles.formInput} type="email" placeholder={t('forms.application.email')} />

                    <div className={styles.buttonBlock}>
                        <p className={styles.applicationDescription}>
                            {t('forms.application.term')}
                        </p>
                        <button className={`${styles.button} ${styles.applicationButton}`} type="submit">
                            {t('forms.application.button')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Application