import { Icon } from "@components/icons"
import { scrollTo } from "@utils/scrollPage"
import { Button } from "react-bootstrap"
export const ButtonToTop = () => {
    const handleScroll = () => {
        scrollTo({ direction: 'top', scrollPosition: { top: 0 } })
    }
    return (
        <Button
            onClick={handleScroll}
            variant="oxford"
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