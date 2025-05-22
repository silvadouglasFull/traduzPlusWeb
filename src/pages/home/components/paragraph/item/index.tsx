import type { Paragraph } from "@pagesHome/components/paragraph/item/types";
export const Item: React.FC<Paragraph> = ({ text }) => {
    return (
        <p className="mb-5">
            {text}
        </p>
    )
}