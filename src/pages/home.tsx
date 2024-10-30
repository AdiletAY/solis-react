import Advantages from "@/components/advantages"
import Cases from "@/components/cases"
import Feedback from "@/components/feedback"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import News from "@/components/news"
import Service from "@/components/services"
import Team from "@/components/team"

import arnamentImg from "@/assets/images/main-bg.png";
import Partners from "@/components/partners"
import Application from "@/components/application"


const HomePage = () => {
    return (
        <div style={{ background: `no-repeat left/cover url(${arnamentImg})` }}>
            <Header />
            <Hero />
            <Cases />
            <Service />
            <Team />
            <News />
            <Advantages />
            <Feedback />
            <Partners />
            <Application />
            <Footer />
        </div>
    )
}

export default HomePage