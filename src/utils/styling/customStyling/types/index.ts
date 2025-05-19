
export type TCustomStyling = NodeListOf<HTMLElement>
export type CustomStylingProps<K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> = {
    elements: TCustomStyling,
    className: "radio-custom" | "checkbox-custom",
    where: InsertPosition,
    classNameNewElement: "radio-custom-dummy" | "checkbox-custom-dummy",
    tagNameNewElement: K
}