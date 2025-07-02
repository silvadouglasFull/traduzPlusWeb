import { useContactUs } from "@components/forms/contactUs/hooks/contactUs";
import { useButtonsLabels } from "@components/forms/contactUs/hooks/useChangaLanguage/buttonsLabels";
import { useChangeLanguage } from "@components/forms/contactUs/hooks/useChangaLanguage/formLabel";
import { useSetPreviewMessage } from "@components/forms/contactUs/hooks/useSetPreviewMessage";
import type { FormProps } from "@components/forms/contactUs/types";
import { Spinner } from "@components/spinner";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export const FormContactUs: React.FC<FormProps & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = ({ loading, onSubmit, ...props }) => {
    const { state, onChange, onChangePhone } = useContactUs()
    const { items } = useChangeLanguage()
    const { text } = useButtonsLabels()
    const { message } = useSetPreviewMessage()
    return (
        <Form className="p-3" onSubmit={onSubmit} {...props}>
            <Row>
                {items.length ? items.map((item, i) => (
                    item.type === 'textarea' ? (
                        <Col md={12} className="col-12">
                            <Form.Group
                                key={item.id}
                                className="mb-3"
                                controlId={`contactUs.${item.idControll}`}
                            >
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control
                                    required
                                    tabIndex={i}
                                    value={state[item.name]}
                                    name={item.name}
                                    onChange={onChange}
                                    as={item.type}
                                    rows={3}
                                    placeholder={message}
                                />
                            </Form.Group>
                        </Col>
                    ) : (
                        <Col md={6} className="col-12">
                            <Form.Group
                                key={item.id}
                                className="mb-3"
                                controlId={`contactUs.${item.idControll}`}
                            >
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control
                                    required={item.required}
                                    tabIndex={i}
                                    value={state[item.name]}
                                    name={item.name}
                                    onChange={item.type === 'tel' ? onChangePhone : onChange}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                />
                            </Form.Group>
                        </Col>
                    )
                )) : null}
            </Row>
            <Button variant="outline-light" type="submit" tabIndex={16} className="w-100 text-uppercase">
                {loading ? (<Spinner />) : text}
            </Button>
        </Form >
    );
}