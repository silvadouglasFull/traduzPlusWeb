import type { Contact } from "@flavor/constants/contacts/types"
import { formatPhoneNumber } from "@utils/form/mask/phone"
export const contacts: Contact = {
    address: 'Rua Antônio Miranda n° 500, São Paulo, Brazil',
    phones: [
        { key: 1, number: formatPhoneNumber('11961180165', 'pt') },
    ],
    email: 'solucoesling@greatwall.com.br'
}