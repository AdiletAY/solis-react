import '@/styles/news.detail.css';
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import PageLoader from "@/components/ui/page-loader.tsx";
import Header from "@/components/header.tsx";
import {Button} from "@/components/ui/button.tsx";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import Footer from "@/components/footer.tsx";
import getServiceById from "@/shared/api/requests/get-service-by-id.ts";

type ServiceType = {
	id: number;
	photo: string;
	name_kk: string;
	name_ru: string;
	name_en: string;
	description_kk: string;
	description_ru: string;
	description_en: string;
	date_created: string;
}
const ServiceDetail = () => {
	const navigate = useNavigate();
	const { serviceId } = useParams();
	const {t, i18n} = useTranslation();
	const [serviceState, setServiceState] = useState<ServiceType | null>(null);

	useEffect(() => {
		(async () => {
			const serviceRes = await getServiceById(serviceId);
			setServiceState(serviceRes);
		})()
	}, []);

	if (!serviceState) return <PageLoader/>
	return (
			<>
				<Header />

				<div className='my-5 flex justify-center items-center'>
					<Button onClick={()=>navigate(-1)}>
						{t('common.back_button')}
					</Button>
				</div>
				<main className="news-detail__main">
					<section className="news-detail__section">
						<h1 className="news-detail__title w-full">
							{// @ts-ignore
								serviceState[`name_${i18n.language}`]
							}
						</h1>
						<div className="news-detail__title-divider"/>
						<div className='w-full'/>
						<p
								className="news-detail__intro"
								dangerouslySetInnerHTML={{// @ts-ignore
									__html: serviceState[`description_${i18n.language}`]
								}}
						/>
						<div className='w-full'/>
						<article className="news-detail__article">
							<img
									src={getStaticImage(serviceState.photo)}
									alt={// @ts-ignore
										serviceState[`name_${i18n.language}`]
									}
									className="news-detail__image"
							/>
						</article>
					</section>
				</main>
				<Footer />
			</>
	);
};

export default ServiceDetail;