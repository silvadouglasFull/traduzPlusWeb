import type { Language } from "@components/carrosel/item/types";

export type Labels = 'First Name' | 'Last Name' | 'E-mail' | 'Phone' | 'Your Message'
export type Names = 'first_name' | 'last_name' | 'email' | 'phone' | 'message'
export type InputType =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
export type FormField = {
    id: number
    idControll: Names
    label: string
    name: Names
    type: InputType
    placeholder?: string
    required?: boolean
    language: Language
}
export type TButtonsLabels = {
    language: Language
    text: string
} 