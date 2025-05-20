import type { FormProps } from "@components/forms/contactUs/types";
import React from "react";
import Form from 'react-bootstrap/Form';
export const FormContactUs: React.FC<FormProps & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = ({ onSubmit, ...props }) => {
    return (
        <Form className="p-3" onSubmit={onSubmit} {...props}>
            <Form.Group className="mb-3" controlId="contactUs.first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="My First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="My Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactUs.message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
}