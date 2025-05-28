import { Icon } from "@components/icons";
import type { ScrollFunction } from "@pages/home/layouts/secoundSection/components/horizontalScroll/types";
import { styles } from "@pagesHome/layouts/secoundSection/components/horizontalScroll/styles";
import type React from "react";
import { Button } from "react-bootstrap";

export const ButtonLeft: React.FC<ScrollFunction> = ({ scroll }: ScrollFunction) => {
    return (
        <Button
            style={{ ...styles.arrowButtonStyle, left: '10px' }}
            onClick={() => scroll('left')}
        >
            <Icon name="fa-solid fa-chevron-left" />
        </Button>
    )
}