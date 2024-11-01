import { useTranslation } from "react-i18next";
import LanguageSelector from "./ui/language-selector.tsx";

import styles from '@/styles/styles.module.css';
import {useEffect, useState} from "react";
import {getBranches} from "@/shared/api/requests/get-branches.ts";

type BrancheType ={
    id: number | string;
    phone: string;
    city_kk: string;
    city_ru: string;
    city_en: string;
}

const Header = () => {
    const { t, i18n } = useTranslation();
    const [branches, setBranches] = useState<BrancheType[]>([])

    useEffect(()=>{
        (async ()=>{
        const branchesRes = await getBranches();
        setBranches(branchesRes);
        })();
    },[])
    return (
        <header className={styles.header}>
            <div className={styles.contactsBlock}>
                <div className={`${styles.contacts} ${styles.container}`}>
                    {
                        branches?.map((branch)=> (
                            <div key={branch?.id} className={styles.phoneBlock}>
                                <span>
                                    {//@ts-ignore
                                        branch[`city_${i18n.language}`]
                                    }
                                </span>
                                <a className={styles.phoneNumber} href={`tel:${branch?.phone}`}>{branch?.phone}</a>
                            </div>
                        ))
                    }

                    <a className={`${styles.button} ${styles.headerApplicationButton}`} href="#application">
                        {t('header.leaveRequest')}
                    </a>

                    <LanguageSelector />
                </div>
            </div>
        </header >
    );
};

export default Header;
