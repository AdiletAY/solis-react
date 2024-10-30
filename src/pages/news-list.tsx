import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/news.list.css';

const NewsListPage = () => {
    const newsItems = [
        {
            id: 1,
            title: "1980s Action Movies That Forever Changed The Genre",
            description:
                "Exploring iconic action movies from the 1980s that continue to influence filmmakers today.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/img_placeholder_1034x432.png",
        },
        {
            id: 2,
            title: "The Rise of Sci-Fi Cinema in the 21st Century",
            description:
                "A look at how science fiction has evolved and become one of the most popular genres in modern cinema.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/img_placeholder_1034x432.png",
        },
        {
            id: 3,
            title: "Horror Movies That Defined the 2000s",
            description:
                "A deep dive into the horror movies of the early 2000s that set new standards in terror and suspense.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/img_placeholder_1034x432.png",
        },
        {
            id: 4,
            title: "Horror Movies That Defined the 2000s",
            description:
                "A deep dive into the horror movies of the early 2000s that set new standards in terror and suspense.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/img_placeholder_1034x432.png",
        },
        {
            id: 5,
            title: "Horror Movies That Defined the 2000s",
            description:
                "A deep dive into the horror movies of the early 2000s that set new standards in terror and suspense.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/img_placeholder_1034x432.png",
        },
    ];

    return (
        <>
            <Header />
            <main className="news-list__main">
                <section className="news-list__section">
                    <h1 className="news-list__title">News</h1>
                    <div className="news-list__items">
                        {newsItems.map((news) => (
                            <article key={news.id} className="news-list__item">
                                <img src={news.imageUrl} alt={news.title} className="news-list__image" />
                                <div className="news-list__content">
                                    <h2 className="news-list__item-title">{news.title}</h2>
                                    <p className="news-list__description">{news.description}</p>
                                    <a href={`/news/${news.id}`} className="news-list__link">Read More</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default NewsListPage;
