import { Header } from "@navbarPublic/index"
import { Outlet } from 'react-router-dom'

/**
 * Default layout component with header
 * @module DefaultLayout
 */
export const DefaultLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

