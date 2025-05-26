import { styles } from "@pagesHome/components/subTitle/styles";
import type { SubTitleProps } from "@pagesHome/components/subTitle/types";
import { transformerInFirstWord } from "@utils/transfomerText";
import type React from "react";
export const SubTitle: React.FC<SubTitleProps> = ({ text, applyShadown = true, ...props }: SubTitleProps) => {
    return (
        <h2 style={styles} {...props} className="text-uppercase font-weight-bold text-center mb-5">
            <span style={{
                fontSize: '4rem',
                opacity: 0.2,
                left: 25,
                position: 'relative',
                top: 10

            }}>{applyShadown ? transformerInFirstWord({ world: text }) : null}</span>
            {text}
        </h2>
    )
}