import type React from 'react';
import { Spinner as ReactBootstrapSpinner } from 'react-bootstrap';

export const Spinner: React.FC = () => {
    return (
        <ReactBootstrapSpinner animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </ReactBootstrapSpinner>
    );
}