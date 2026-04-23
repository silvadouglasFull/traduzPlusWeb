import type { Contact } from "@flavor/constants/contacts/types"
import { formatPhoneNumber } from "@utils/form/mask/phone"
export const contacts: Contact = {
    address: '',
    phones: [
        { key: 1, number: formatPhoneNumber('11969790051', 'pt') },
    ],
    email: 'contato@solucoesgreatwall.com.br'
}