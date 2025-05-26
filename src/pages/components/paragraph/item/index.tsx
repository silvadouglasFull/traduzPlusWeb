import type { Paragraph } from "@pages/components/paragraph/item/types";
export const Item: React.FC<Paragraph> = ({ text }) => {
    return (
        <p className="mb-5 text-secondary">
            {text}
        </p>
    )
}