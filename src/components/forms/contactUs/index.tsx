import { useContactUs } from "@components/forms/contactUs/hooks/contactUs";
import type { FormProps } from "@components/forms/contactUs/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import React from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export const FormContactUs: React.FC<FormProps & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = ({ onSubmit, ...props }) => {
    const { state, onChange, onChangePhone } = useContactUs()
    const {
        email,
        first_name,
        last_name,
        message,
        phone
    } = state
    return (
        <Form className="p-3" onSubmit={onSubmit} {...props}>
            <Form.Group className="mb-3" controlId="contactUs.first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control required tabIndex={1} value={first_name} name="first_name" onChange={onChange} type="text" placeholder="My First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required tabIndex={2} value={last_name} name="last_name" onChange={onChange} type="text" placeholder="My Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control required tabIndex={3} value={email} name="email" onChange={onChange} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required tabIndex={4} value={phone} name="phone" onChange={onChangePhone} type="tel" placeholder={formatPhoneNumber('00000000000', 'br')} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control required tabIndex={5} value={message} name="message" onChange={onChange} as="textarea" rows={3} />
            </Form.Group>
            <Button className="w-100 text-uppercase">
                Send Message
            </Button>
        </Form>
    );
}