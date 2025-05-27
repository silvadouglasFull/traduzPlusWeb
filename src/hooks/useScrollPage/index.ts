import type { Pathname } from "@hooks/useScrollPage/types"
import { scrollTo } from "@utils/scrollPage"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useScrollPage = (): Pathname => {
    const { pathname } = useLocation()
    useEffect(() => {
        scrollTo({ direction: 'top', scrollPosition: { left: 0, top: 0 } })
    }, [pathname])
    return {
        pathname
    }
}