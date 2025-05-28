import { sections } from "@constants/index"
export type CreatePropsState = {
    message: string
    name: string
    descriptionsMessage: string
}
export type CreateState = {
    focusId: string
    message: string
}
export const createPropsState = ({ message, name, descriptionsMessage }: CreatePropsState): CreateState => {
    return {
        focusId: sections.home.contact,
        message: `${message.replace('.', '')}: ${name} (${descriptionsMessage})`
    }
}