import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/news.detail.css";

import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getNewsById from "@/shared/api/requests/get.news.byID.ts";
import {useTranslation} from "react-i18next";
import PageLoader from "@/components/ui/page-loader.tsx";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {Button} from "@/components/ui/button.tsx";

type NewsType = {
  id: number;
  photo: string;
  title_kk: string;
  title_ru: string;
  title_en: string;
  description_kk: string;
  description_ru: string;
  description_en: string;
  date_created: string;
}

const NewsDetailPage = () => {
  const navigate = useNavigate();
    const { newsId } = useParams();
    const {i18n} = useTranslation();
    const [news, setNews] = useState<NewsType | null>(null);

    useEffect(() => {
        (async () => {
          const newsRes = await getNewsById(newsId);
            setNews(newsRes);
        })()
    }, []);

    if (!news) return <PageLoader/>
    return (
        <>
            <Header />

          <div className='my-5 flex justify-center items-center'>
            <Button onClick={()=>navigate(-1)}>
              Назад
            </Button>
          </div>
            <main className="news-detail__main">
              <section className="news-detail__section">
                <h1 className="news-detail__title w-full">
                  {// @ts-ignore
                    news[`title_${i18n.language}`]
                  }
                </h1>
                <div className="news-detail__title-divider"/>
                <div className='w-full'/>
                <p
                    className="news-detail__intro"
                    dangerouslySetInnerHTML={{// @ts-ignore
                      __html: news[`description_${i18n.language}`]
                    }}
                />
                <div className='w-full'/>
                <article className="news-detail__article">
                  <img
                      src={getStaticImage(news.photo)}
                      alt={// @ts-ignore
                        news[`title_${i18n.language}`]
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

export default NewsDetailPage;
