import { ControlledCarousel } from "@components/carrosel";
import { Footer } from "@components/footer";
import { Header } from "@components/navbarPublic/index";
import { carroselSlides } from "@flavor/index";
export const DefaultLayout: React.FC = () => {
    return (
        <section>
            <Header />
            <ControlledCarousel items={carroselSlides} />
            <Footer />
        </section>
    )
}

