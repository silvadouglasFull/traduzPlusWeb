import { Header } from "@components/navbarPublic/index"
import "@styles/defaultLayout/index.css"
import { Outlet } from 'react-router-dom'
/**
 * Default layout component with header
 * @module DefaultLayout
 */
export const DefaultLayout: React.FC = () => {
    return (
        <div className="page animated animation-duration-5">
            <section className="section page-header-navbar rd-navbar-outer jumbotron-classic bg-gray-700">
                <Header />
            </section>
            <Outlet />
        </div>
    )
}

