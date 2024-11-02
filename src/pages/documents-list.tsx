import '@/styles/news.detail.css';
import Header from "@/components/header.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import Footer from "@/components/footer.tsx";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import getDocuments from "@/shared/api/requests/get-documents.ts";
import {getStaticFile} from "@/lib/helpers/get-static-file.ts";

type DocumentType ={
	id: number;
	docName_ru: string;
	docName_kk: string;
	docName_en: string;
	src_ru: string;
	src_kk: string;
	src_en: string;
};

const DocumentsList = () => {
	const {slug} = useParams();
	const {t, i18n} = useTranslation();
	const navigate = useNavigate();
	const [documents, setDocuments] = useState<DocumentType[]>([]);

	useEffect(() => {
		(async () => {
		if (slug === 'documents-templates'){
			const docRes = await getDocuments();
			setDocuments(docRes)
		} else {
			navigate('/')
		}
		})();
	}, [slug]);

	return (
			<div>
				<>
					<Header/>

					<div className='my-5 flex justify-center items-center'>
						<Button onClick={() => navigate(-1)}>
							{t('common.back_button')}
						</Button>
					</div>
					<main className="news-detail__main">
						<section className="news-detail__section">
							<ul className='flex flex-col justify-start items-start gap-2.5'>
								{documents?.map((doc) => (
									<li className='w-full max-w-96 text-nowrap overflow-hidden text-ellipsis' key={doc.id}>
										<Link
												className='w-full max-w-96 text-nowrap overflow-hidden text-ellipsis text-blue-800 hover:text-blue-600 hover:underline'
												target='_blank'
												to={//@ts-ignore
													getStaticFile(doc[`src_${i18n.language}`])
												}
										>
											{//@ts-ignore
												doc[`docName_${i18n.language}`]
											} dwwadawdawd dwa wa dawd awd aw wad aw
										</Link>
									</li>
								))}
							</ul>
						</section>
					</main>
					<Footer/>
				</>
			</div>
	);
}
;

export default DocumentsList;