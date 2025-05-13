import { DefaultLayout } from '@layouts/public'
import type React from 'react'
import { Route, Routes } from 'react-router-dom'
export const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index path="/" element={<h1>Olá</h1>} />
            </Route>
        </Routes>
    )
}
