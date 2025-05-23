import { FallBack } from "@components/fallback";
import { Footer } from "@components/footer";
import { Header } from "@components/navbarPublic/index";
import { carroselSlides } from "@flavor/index";
import React, { lazy, Suspense } from "react";
const Outlet = lazy(() => import("react-router-dom").then(({ Outlet }) => ({ default: Outlet })))
const ControlledCarousel = lazy(() => import('@components/carrosel/index').then(({ ControlledCarousel }) => ({ default: ControlledCarousel })))
export const DefaultLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<FallBack />}>
                <ControlledCarousel items={carroselSlides} />
            </Suspense>
            <Outlet />
            <Footer />
        </>
    )
}

