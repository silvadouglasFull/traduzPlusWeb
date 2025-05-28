import type { UseShowBreadCrumbs } from "@layouts/public/hooks/useShowBreadCrumbs/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useShowBreadCrumbs = (): UseShowBreadCrumbs => {
    const [show, setShow] = useState(false)
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/') setShow(false)
        else setShow(true)
    }, [pathname])
    return {
        show,
        pathName: pathname
    }
}