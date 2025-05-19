import { DefaultLayout } from '@layouts/public'
import { PageHome } from '@pages/home'
import type React from 'react'
import { Route, Routes } from 'react-router-dom'
export const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index path="/" element={<PageHome />} />
            </Route>
        </Routes>
    )
}
