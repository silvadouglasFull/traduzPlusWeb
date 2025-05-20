import type { FormContextType, States } from "@components/forms/contactUs/context/types";
import type { Event } from "@components/forms/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import { reducer } from "@utils/form/reducer";
import { isValidEmail } from "@utils/form/valid/email";
import React, { createContext, useReducer } from "react";

export const states: States = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
}
export const Context = createContext<FormContextType | undefined>(undefined);

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, states)
    const onChange = (event: Event) => {
        const { name, value } = event.target;
        dispatch({ field: name as keyof States, value });
    }
    const onChangePhone = (event: Event) => {
        const { value, name } = event.target
        const phone = formatPhoneNumber(value, "br")
        dispatch({ field: name as keyof States, value: phone })
    }
    const onChangeEmail = (event: Event) => {
        const { value, name } = event.target
        const isValid = isValidEmail(value)
        if (isValid) {
            dispatch({ field: name as keyof States, value: value })
        } else {
            dispatch({ field: name as keyof States, value: '' })
        }
    }
    return (
        <Context.Provider value={{
            state,
            onChange,
            onChangePhone,
            onChangeEmail
        }}>
            {children}
        </Context.Provider>
    )
}
