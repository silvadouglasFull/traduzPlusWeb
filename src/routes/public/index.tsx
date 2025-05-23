import { Spinner } from '@components/spinner'
import type React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('@pagesHome/index').then(({ PageHome }) => ({ default: PageHome })))
const DefaultLayout = lazy(() => import('@layouts/public/index').then(({ DefaultLayout }) => ({ default: DefaultLayout })))
export const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Suspense fallback={<Spinner />}>
                    <DefaultLayout />
                </Suspense>
            }>
                <Route index element={
                    <Suspense fallback={<Spinner />}>
                        <Home />
                    </Suspense>
                } />
            </Route>
        </Routes>
    )
}
