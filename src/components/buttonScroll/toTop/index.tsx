import { Icon } from "@components/icons"
import { useShowBottonScrollToTop } from "@hooks/useShowButtonScrollToTop"
import { scrollTo } from "@utils/scrollPage"
import type React from "react"
import { Button } from "react-bootstrap"
export const ButtonToTop: React.FC = () => {
    const { show } = useShowBottonScrollToTop()
    const handleScroll = () => {
        scrollTo({ direction: 'top', scrollPosition: { top: 0 } })
    }
    if (!show) {
        return (
            <></>
        )
    }
    return (
        <Button
            onClick={handleScroll}
            variant="outline-light"
            style={{
                position: 'fixed',
                bottom: 20,
                width: 50,
                height: 50,
                right: 20
            }}>
            <Icon name="fa-solid fa-chevron-up" />
        </Button>
    )
}