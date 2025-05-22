import { ControlledCarousel } from "@components/carrosel";
import { Footer } from "@components/footer";
import { Header } from "@components/navbarPublic/index";
import { carroselSlides } from "@flavor/index";
import { Outlet } from "react-router-dom";
export const DefaultLayout: React.FC = () => {
    return (
        <>
            <Header />
            <ControlledCarousel items={carroselSlides} />
            <Outlet />
            <Footer />
        </>
    )
}

