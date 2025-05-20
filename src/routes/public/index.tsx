import { PageHome } from '@pages/home'
import type React from 'react'
import { Route, Routes } from 'react-router-dom'
export const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route index path="/" element={<PageHome />} />
        </Routes>
    )
}
