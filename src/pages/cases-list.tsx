import Header from "@/components/header.tsx";
import {Button} from "@/components/ui/button.tsx";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {Link, useNavigate} from "react-router-dom";
import Footer from "@/components/footer.tsx";
import {useTranslation} from "react-i18next";
import '@/styles/news.list.css';
import {useEffect, useState} from "react";
import {CaseType} from "@/components/cases.tsx";
import getCases from "@/shared/api/requests/get.cases.all.ts";


const CasesList = () => {
	const navigate = useNavigate();
	const {t, i18n} = useTranslation();
	const [caseState, setCaseState] = useState<CaseType[]>([]);

	useEffect(() => {
		(async () => {
			const caseRes = await getCases();
			setCaseState(caseRes)
		})()
	}, []);
	return (
			<>
				<Header/>
				<div className='my-5 flex justify-center items-center'>
					<Button onClick={() => navigate(-1)}>
						{t('common.back_button')}
					</Button>
				</div>
				<main className="news-list__main">
					<section className="news-list__section">
						<h1 className="news-list__title">
							{t('pages.home.cases')}
						</h1>
						<div className="news-list__items">
							{caseState?.map((caseItem) => (
									<article key={caseItem.id} className="news-list__item">
										<img
												src={getStaticImage(caseItem.photo)}
												className="news-list__image"
												alt={// @ts-ignore
													caseItem[`name_${i18n.language}`]
												}
										/>
										<div className="news-list__content">
											<h2 className="news-list__item-title">
												{// @ts-ignore
													caseItem[`name_${i18n.language}`]
												}
											</h2>
											<Link to={`/cases/${caseItem.id}`} className="news-list__link">Смотреть</Link>
										</div>
									</article>
							))}
						</div>
					</section>
				</main>
				<Footer/>
			</>
	);
};

export default CasesList;