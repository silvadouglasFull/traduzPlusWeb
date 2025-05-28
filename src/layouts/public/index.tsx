import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { ButtonToTop } from "@components/buttonScroll/toTop";
import { useChangeLanguage } from "@components/carrosel/hooks/useChangeLanguage";
import { FallBack } from "@components/fallback";
import { Footer } from "@components/footer";
import { Header } from "@components/navbarPublic/index";
import { useShowDefaultLayout } from "@layouts/public/hooks/useShowDefaultLayout";
import React, { lazy, Suspense } from "react";

const Breadcrumbs = lazy(() => import('@components/bradCumps').then(({ Breadcrumbs }) => ({ default: Breadcrumbs })))
const Outlet = lazy(() => import("react-router-dom").then(({ Outlet }) => ({ default: Outlet })))
const ControlledCarousel = lazy(() => import('@components/carrosel/index').then(({ ControlledCarousel }) => ({ default: ControlledCarousel })))
export const DefaultLayout: React.FC = () => {
    const { show } = useShowDefaultLayout()
    const { items } = useChangeLanguage()
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Header />
            {show ? (
                <Suspense fallback={<FallBack />}>
                    <ControlledCarousel items={items} />
                </Suspense>
            ) : <Breadcrumbs backgroundImage={midia} />}
            <Outlet />
            <Footer />
            <ButtonToTop />
        </>
    )
}

