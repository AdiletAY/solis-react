import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/news.list.css';
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {NewsType} from "@/components/news.tsx";
import {useEffect, useState} from "react";
import getNews from "@/shared/api/requests/get.news.all.ts";
import {useTranslation} from "react-i18next";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";

const NewsListPage = () => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        (async () => {
          const newsRes = await getNews();
          setNews(newsRes)
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
                      {t('pages.home.news')}
                    </h1>
                    <div className="news-list__items">
                        {news?.map((news) => (
                            <article key={news.id} className="news-list__item">
                                <img
                                    src={getStaticImage(news.photo)}
                                    className="news-list__image"
                                    alt={// @ts-ignore
                                        news[`title_${i18n.language}`]
                                    }
                                />
                                <div className="news-list__content">
                                    <h2 className="news-list__item-title">
                                        {// @ts-ignore
                                            news[`title_${i18n.language}`]
                                        }
                                    </h2>
                                    <Link to={`/news/${news.id}`} className="news-list__link">Смотреть</Link>
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

export default NewsListPage;
