import { useChangeTitlePage } from '@hooks/useChangeTitlePage'
import { DefaultLayout } from '@layouts/public'
import { PageAboutUs } from "@pages/aboutUs"
import { PageContact } from '@pages/contacts'
import { PageHome } from '@pages/home'
import { PageServices } from '@pages/services'
import type React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

export const PublicRouter: React.FC = () => {
    const { titlePage } = useChangeTitlePage()
    useEffect(() => {
        window.document.title = titlePage
    }, [titlePage])
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<PageHome />} />
                <Route path='/about' element={<PageAboutUs />} />
                <Route path='/contact' element={<PageContact />} />
                <Route path='/services' element={<PageServices />} />
            </Route>
        </Routes>
    )
}
