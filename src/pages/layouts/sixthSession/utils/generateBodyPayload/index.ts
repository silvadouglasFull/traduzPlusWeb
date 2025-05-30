import type { GenerateBodyPayload } from "@pages/layouts/sixthSession/utils/generateBodyPayload/types";

export const generateBodyPayload = ({ state, previewMessage }: GenerateBodyPayload) => {
    const { email, first_name, last_name, message, phone } = state
    return `${previewMessage}:
    ${email}, ${first_name}, ${last_name}, ${message}, ${phone}
    `
}