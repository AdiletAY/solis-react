import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/news.detail.css";

const NewsDetailPage = () => {

    // Request to server
    return (
        <>
            <Header />
            <main className="news-detail__main">
                <section className="news-detail__section">
                    <h1 className="news-detail__title">1980s Action Movies That Forever Changed The Genre</h1>
                    <div className="news-detail__title-divider"></div>
                    <p className="news-detail__intro">
                        A recent Scout study carried out by Mediahub found that young people love to re-watch action movies from the
                        past. With that in mind, we’re taking a look at some of the best movies from the decade that put the genre on
                        the map: the 1980s. The following are therefore films that hit big at the time and continue to influence
                        writers, actors, and directors to this day.
                    </p>
                    <article className="news-detail__article">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/img_placeholder_1034x432.png"
                            alt="Raiders of the Lost Ark"
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
