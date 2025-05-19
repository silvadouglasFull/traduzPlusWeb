import { Header } from "@components/navbarPublic/index"
import { Outlet } from 'react-router-dom'
/**
 * Default layout component with header
 * @module DefaultLayout
 */
export const DefaultLayout: React.FC = () => {
    return (
        <div>
            <section>
                <Header />
            </section>
            <Outlet />
        </div>
    )
}

