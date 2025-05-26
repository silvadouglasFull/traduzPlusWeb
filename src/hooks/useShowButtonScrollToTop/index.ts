import { usePageYOffset } from "@hooks/usePageYOffset"
import type { UseShowBottonScrollToTop } from "@hooks/useShowButtonScrollToTop/types"
import { useEffect, useState } from "react"

export const useShowBottonScrollToTop = (): UseShowBottonScrollToTop => {
    const { scrollPosition } = usePageYOffset()
    const [show, setShow] = useState<boolean>(true)
    useEffect(() => {
        if (scrollPosition <= 500) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [scrollPosition])
    return { show }
}