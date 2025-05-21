import type { Event } from "@components/forms/types"

export type States = {
    first_name: string | undefined
    last_name: string | undefined
    email: string | undefined
    phone: string | undefined
    message: string | undefined
}
export type ReducerParams = {
    field: keyof States
    value: StateValue
}

export type StateValue = States[keyof States]
export type FormContextType = {
    state: States
    onChange: (event: Event) => void
    onChangePhone: (event: Event) => void
}
