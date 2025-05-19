import { ControlledCarousel } from "@components/carrosel";
import { Header } from "@components/navbarPublic/index";
import { carroselSlides } from "@flavor/index";
import { Outlet } from 'react-router-dom';
export const DefaultLayout: React.FC = () => {
    return (
        <div>
            <section>
                <Header />
                <ControlledCarousel items={carroselSlides} />
            </section>
            <Outlet />
        </div>
    )
}

