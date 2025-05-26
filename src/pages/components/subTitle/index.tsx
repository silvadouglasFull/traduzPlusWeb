import { styles } from "@pages/components/subTitle/styles";
import type { SubTitleProps } from "@pages/components/subTitle/types";
import { transformerInFirstWord } from "@utils/transfomerText";
import type React from "react";
export const SubTitle: React.FC<SubTitleProps> = ({ text, applyShadown = true, ...props }: SubTitleProps) => {
    return (
        <h2 {...props} className="text-uppercase font-weight-bold text-center mb-5">
            <span style={styles}>{applyShadown ? transformerInFirstWord({ world: text }) : null}</span>
            {text}
        </h2>
    )
}