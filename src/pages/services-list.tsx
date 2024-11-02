import '@/styles/news.list.css';
import Header from "@/components/header.tsx";
import {Button} from "@/components/ui/button.tsx";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {Link, useNavigate} from "react-router-dom";
import Footer from "@/components/footer.tsx";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import getServices from "@/shared/api/requests/get-services.ts";
import {ServiceType} from "@/components/services.tsx";


const ServicesList = () => {
	const navigate = useNavigate();
	const {t, i18n} = useTranslation();
	const [services, setServices] = useState<ServiceType[]>([]);

	useEffect(() => {
		(async () => {
			const serviceRes = await getServices();
			setServices(serviceRes)
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
							{t('pages.home.services')}
						</h1>
						<div className="news-list__items">
							{services?.map((service) => (
									<article key={service.id} className="news-list__item">
										<img
												src={getStaticImage(service.photo)}
												className="news-list__image"
												alt={// @ts-ignore
													service[`name_${i18n.language}`]
												}
										/>
										<div className="news-list__content">
											<h2 className="news-list__item-title">
												{// @ts-ignore
													service[`name_${i18n.language}`]
												}
											</h2>
											<Link to={`/news/${service.id}`} className="news-list__link hidden">Смотреть</Link>
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

export default ServicesList;